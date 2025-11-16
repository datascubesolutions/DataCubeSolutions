/**
 * Form Validation Schemas using Zod
 * Provides type-safe form validation
 */

import { z } from 'zod';

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .max(200, 'Company name must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  inquiryType: z
    .string()
    .min(1, 'Please select an inquiry type'),
  message: z
    .string()
    .max(2000, 'Message must be less than 2000 characters')
    .optional()
    .default(''),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Inquiry form validation schema
 */
export const inquiryFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().max(200).optional(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
  inquiryType: z.enum(['general', 'support', 'sales', 'partnership', 'technical']).optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
  source: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type InquiryFormData = z.infer<typeof inquiryFormSchema>;

