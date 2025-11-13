import http from '../http';

export interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject?: string;
  message: string;
  inquiryType: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  source?: string;
  tags?: string[];
  isEmailSent?: boolean;
  emailSentAt?: string;
  isWhatsAppSent?: boolean;
  whatsAppSentAt?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
  updatedAt: string;
  ageInDays?: number;
}

export interface InquiryFilters {
  page?: number;
  limit?: number;
  status?: string;
  inquiryType?: string;
  priority?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface InquiryUpdate {
  status?: 'pending' | 'in-progress' | 'resolved' | 'closed';
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  tags?: string[];
  assignedTo?: string;
  responseTime?: string;
}

export interface InquiryStats {
  overview: {
    total: number;
    pending: number;
    inProgress: number;
    resolved: number;
    closed: number;
  };
  byType: Array<{ _id: string; count: number }>;
  byPriority: Array<{ _id: string; count: number }>;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

// Get all inquiries with filters
export const getInquiries = (filters?: InquiryFilters) => {
  const params = new URLSearchParams();
  
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params.append(key, String(value));
      }
    });
  }
  
  const queryString = params.toString();
  const url = queryString ? `/api/inquiries?${queryString}` : '/api/inquiries';
  
  return http.get({
    url,
    messageSettings: {
      hideErrorMessage: false,
      hideSuccessMessage: true,
    },
  }) as Promise<PaginatedResponse<Inquiry>>;
};

// Get inquiry by ID
export const getInquiryById = (id: string) => {
  return http.get({
    url: `/api/inquiries/${id}`,
    messageSettings: {
      hideErrorMessage: false,
      hideSuccessMessage: true,
    },
  }) as Promise<{ success: boolean; data: Inquiry }>;
};

// Update inquiry
export const updateInquiry = (id: string, data: InquiryUpdate) => {
  return http.put({
    url: `/api/inquiries/${id}`,
    data,
    messageSettings: {
      hideErrorMessage: false,
      hideSuccessMessage: false,
      successMessage: 'Inquiry updated successfully',
    },
  }) as Promise<{ success: boolean; message: string; data: Inquiry }>;
};

// Delete inquiry
export const deleteInquiry = (id: string) => {
  return http.delete({
    url: `/api/inquiries/${id}`,
    messageSettings: {
      hideErrorMessage: false,
      hideSuccessMessage: false,
      successMessage: 'Inquiry deleted successfully',
    },
  }) as Promise<{ success: boolean; message: string }>;
};

// Get inquiry statistics
export const getInquiryStats = () => {
  return http.get({
    url: '/api/inquiries/stats',
    messageSettings: {
      hideErrorMessage: false,
      hideSuccessMessage: true,
    },
  }) as Promise<{ success: boolean; data: InquiryStats }>;
};

