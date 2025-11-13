'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Mic, Square } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Format message text with markdown-like formatting
const formatMessage = (text: string) => {
  // Split by line breaks
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  return lines.map((line, index) => {
    const trimmedLine = line.trim();
    
    // Check for numbered list (1. **text** or 1. text)
    const numberedListMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);
    if (numberedListMatch) {
      const number = numberedListMatch[1];
      const content = numberedListMatch[2];
      // Process bold text in content
      const formattedContent = content.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-cyan-300">$1</strong>');
      return (
        <div key={index} className="flex gap-2 mb-2 last:mb-0">
          <span className="text-blue-400 font-semibold flex-shrink-0">{number}.</span>
          <span className="flex-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </div>
      );
    }
    
    // Check for bullet points (- or •)
    if (trimmedLine.match(/^[-•]\s+(.+)$/)) {
      const content = trimmedLine.replace(/^[-•]\s+/, '');
      const formattedContent = content.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-cyan-300">$1</strong>');
      return (
        <div key={index} className="flex gap-2 mb-2 last:mb-0">
          <span className="text-blue-400 flex-shrink-0">•</span>
          <span className="flex-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </div>
      );
    }
    
    // Regular line with bold text
    const formattedLine = trimmedLine.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-cyan-300">$1</strong>');
    
    return (
      <p key={index} className="mb-2 last:mb-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedLine }} />
    );
  });
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [wsConnected, setWsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const isListeningRef = useRef(false);
  const wsRef = useRef<WebSocket | null>(null);
  const tokenRef = useRef<string>('');

  // Generate unique token for user
  const generateToken = (): string => {
    // Check if token exists in localStorage
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('chat_token');
      if (storedToken) {
        return storedToken;
      }
      
      // Generate new token
      const token = `user_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem('chat_token', token);
      return token;
    }
    return `user_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  };

  const toggleChat = () => {
    if (isOpen && isListening) {
      // Stop microphone when closing chat
      if (recognitionRef.current) {
        isListeningRef.current = false;
        recognitionRef.current.stop();
        setIsListening(false);
      }
    }
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true; // Keep recording until stopped
        recognition.interimResults = true; // Show interim results
        // Support multiple languages - browser will auto-detect or use system language
        // You can change this to specific language like 'hi-IN', 'en-US', 'es-ES', etc.
        recognition.lang = navigator.language || 'en-US';

        recognition.onstart = () => {
          setIsListening(true);
          isListeningRef.current = true;
        };

        recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript + ' ';
            } else {
              interimTranscript += transcript;
            }
          }

          if (finalTranscript) {
            setInputValue((prev) => prev + (prev ? ' ' : '') + finalTranscript.trim());
          }
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          // Don't stop on error, let user manually stop
          if (event.error === 'no-speech') {
            // This is normal, just continue
            return;
          }
          // Only stop if it's a critical error
          if (event.error === 'not-allowed' || event.error === 'aborted') {
            setIsListening(false);
            isListeningRef.current = false;
          }
        };

        recognition.onend = () => {
          // Auto-restart if still listening (continuous mode)
          if (isListeningRef.current && recognitionRef.current) {
            try {
              recognitionRef.current.start();
            } catch (error) {
              // Already started or error, ignore
              setIsListening(false);
              isListeningRef.current = false;
            }
          } else {
            setIsListening(false);
            isListeningRef.current = false;
          }
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Initialize token on mount
  useEffect(() => {
    tokenRef.current = generateToken();
  }, []);

  // WebSocket connection
  useEffect(() => {
    if (!isOpen) {
      // Close WebSocket when chat is closed
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
        setWsConnected(false);
      }
      return;
    }

    // Generate token if not exists
    if (!tokenRef.current) {
      tokenRef.current = generateToken();
    }

    // Connect WebSocket
    const wsUrl = `ws://localhost:8000/ws/${tokenRef.current}`;
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('WebSocket connected');
      setWsConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        // Handle bot response in new format: { type: "message", data: { content: "..." } }
        let messageText = '';
        
        if (data.type === "message" && data.data && data.data.content) {
          messageText = data.data.content;
        } else if (data.message || data.text) {
          // Fallback to old format
          messageText = data.message || data.text;
        } else if (data.content) {
          // Direct content field
          messageText = data.content;
        }
        
        if (messageText) {
          const botMessage: Message = {
            id: Date.now().toString(),
            text: messageText,
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
          setIsTyping(false);
        }
      } catch (error) {
        // If not JSON, treat as plain text
        const botMessage: Message = {
          id: Date.now().toString(),
          text: event.data,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setWsConnected(false);
      // Fallback to local bot response on error
      setIsTyping(false);
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
      setWsConnected(false);
      wsRef.current = null;
    };

    wsRef.current = ws;

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
        setWsConnected(false);
      }
    };
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you. What would you like to know about our services?";
    } else if (lowerMessage.includes('service') || lowerMessage.includes('services')) {
      return "We offer IT Solutions (ERP, CRM, Web Development) and Startup Support (Registration, Certifications, Funding). Which one interests you?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Our pricing varies based on your requirements. Would you like a free consultation? I can connect you with our team!";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return "You can reach us through our contact page or I can help you schedule a consultation. What works best for you?";
    } else if (lowerMessage.includes('erp') || lowerMessage.includes('crm')) {
      return "We provide comprehensive ERP and CRM solutions tailored to your business needs. Would you like more details?";
    } else if (lowerMessage.includes('startup') || lowerMessage.includes('registration')) {
      return "We help startups with company registration, certifications, funding support, and documentation. How can we assist you?";
    } else {
      return "Thank you for your message! Our team will get back to you shortly. Is there anything specific you'd like to know?";
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const messageText = inputValue.trim();
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Send message via WebSocket if connected
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      try {
        // Send message in the required format
        wsRef.current.send(JSON.stringify({
          type: "message",
          data: { content: messageText }
        }));
      } catch (error) {
        console.error('Error sending message via WebSocket:', error);
        // Fallback to local response
        setTimeout(() => {
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: getBotResponse(messageText),
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botResponse]);
          setIsTyping(false);
        }, 1000);
      }
    } else {
      // Fallback to local bot response if WebSocket not connected
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(messageText),
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMicrophone = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      // Stop recording
      isListeningRef.current = false;
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      // Start recording
      try {
        isListeningRef.current = true;
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        setIsListening(false);
        isListeningRef.current = false;
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'scale-90' : 'scale-100 hover:scale-110'
        }`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
        )}
        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></span>
        )}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 md:bottom-20 w-[calc(100vw-2rem)] md:w-96 h-[550px] md:h-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 flex flex-col overflow-hidden transition-all duration-300 ease-in-out max-w-md">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">AI Chat Bot</h3>
                <p className="text-blue-100 text-xs flex items-center gap-1">
                  {wsConnected ? (
                    <>
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Connected
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                      Connecting...
                    </>
                  )}
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center justify-center"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${
                  message.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                  }`}
                >
                  {message.sender === 'user' ? (
                    <MessageCircle className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`flex-1 ${message.sender === 'user' ? 'items-end' : ''}`}>
                  <div
                    className={`rounded-lg p-3 text-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white ml-auto max-w-[80%]'
                        : 'bg-slate-700/50 text-slate-200 max-w-[80%]'
                    }`}
                  >
                    {message.sender === 'bot' ? (
                      <div className="space-y-0.5">
                        {formatMessage(message.text)}
                      </div>
                    ) : (
                      message.text.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))
                    )}
                  </div>
                  <span
                    className={`text-xs text-slate-400 mt-1 block ${
                      message.sender === 'user' ? 'text-right' : ''
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-slate-700/50 rounded-lg p-3 text-sm text-slate-200 inline-block">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-700/50 bg-slate-900/50">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={isTyping}
              />
              <button
                onClick={toggleMicrophone}
                disabled={isTyping}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  isListening
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 animate-pulse'
                    : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'
                }`}
                aria-label="Voice input"
                title={isListening ? 'Stop recording' : 'Start voice input'}
              >
                {isListening ? (
                  <Square className="w-4 h-4 text-white fill-white" />
                ) : (
                  <Mic className="w-4 h-4 text-white" />
                )}
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white flex items-center justify-center transition-all shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
              AI Bot • Typically replies within a few seconds
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

