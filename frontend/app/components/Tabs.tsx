'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate content on tab change
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  useEffect(() => {
    // Initial animation for tabs
    if (tabsRef.current) {
      const tabButtons = tabsRef.current.querySelectorAll('.tab-button');
      gsap.fromTo(
        tabButtons,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div
        ref={tabsRef}
        className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 scale-100'
            }`}
          >
            <span className="flex items-center gap-2">
              {tab.icon && <span className="text-xl">{tab.icon}</span>}
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        ref={contentRef}
        className="min-h-[400px] w-full"
      >
        {activeTabContent && (
          <div className="fade-in-content">
            {activeTabContent.content}
          </div>
        )}
      </div>
    </div>
  );
}

