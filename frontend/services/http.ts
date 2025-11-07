import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  Notification,
  NOTIFICATION_TYPE_ERROR,
  NOTIFICATION_TYPE_INFO,
  NOTIFICATION_TYPE_SUCCESS,
} from '../lib/components/notification/notification';

interface ShowErrorMessage {
  hideSuccessMessage?: boolean;
  hideErrorMessage?: boolean;
  errorMessage?: string;
  successMessage?: string;
  errorCodes?: Array<number>;
}

interface RequestInterface {
  config: AxiosRequestConfig;
  messageSettings?: ShowErrorMessage;
}

interface GetRequestInterface {
  url: string;
  config?: AxiosRequestConfig;
  messageSettings?: ShowErrorMessage;
}

interface IAPIOptions {
  url: string;
  config?: AxiosRequestConfig;
  messageSettings?: ShowErrorMessage;
  data?: any;
  method?: string;
}

interface PostRequestInterface {
  url: string;
  data?: any;
  config?: AxiosRequestConfig;
  messageSettings?: ShowErrorMessage;
}

interface PutRequestInterface {
  url: string;
  data?: any;
  config?: AxiosRequestConfig;
  messageSettings?: ShowErrorMessage;
}

interface DeleteRequestInterface {
  url: string;
  data?: any;
  config?: AxiosRequestConfig;
  messageSettings?: ShowErrorMessage;
}

enum StatusCode {
  NoContent = 204,
  InvalidRequest = 400,
  ResourceUnauthorized = 401,
  ClientForbidden = 403,
  ResourceNotFound = 404,
  Conflict = 409,
  BadGateway = 502,
  ServiceUnavailable = 503,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  // Note: Access-Control-Allow-Origin is a response header, not a request header
  // The browser automatically sends the Origin header
};

const defaultSettings: ShowErrorMessage = {
  hideSuccessMessage: false,
  hideErrorMessage: false,
  errorMessage: '',
  successMessage: '',
};

const Http = async (apiDataProps: IAPIOptions) => {
  const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASIC_URL,
    headers,
    withCredentials: true,
  });

  const {
    url: apiUrl,
    config: apiConfig = {},
    messageSettings,
    data: apiData,
    method = 'get',
  } = apiDataProps;

  // Prepare final config with data for all methods except GET
  const finalConfig: AxiosRequestConfig = {
    ...apiConfig,
    ...(apiData && method !== 'get' && { data: apiData }),
  };

  const handleSuccess = (response: AxiosResponse<any, any>) => {
    if (typeof window !== 'undefined' && messageSettings && !messageSettings.hideSuccessMessage) {
      if (messageSettings.successMessage !== '') {
        Notification({
          type: NOTIFICATION_TYPE_SUCCESS,
          //@ts-ignore

          message: messageSettings.successMessage,
        });
      } else if (response?.data?.meta?.message) {
        Notification({
          type: NOTIFICATION_TYPE_SUCCESS,
          message: response?.data?.meta?.message,
        });
      } else if (response?.status === StatusCode.NoContent) {
        Notification({
          type: NOTIFICATION_TYPE_INFO,
          message: 'Nothing Updated.',
        });
      }
    }
  };

  const handleError = async (error: any) => {
    // Handle Axios error structure: error.response contains status and data
    // Axios errors have the structure: error.response.status and error.response.data
    const status = error?.response?.status || error?.status;
    const data = error?.response?.data || error?.data;
    
    // Handle network errors (no response)
    if (!error.response && error.request) {
      if (typeof window !== 'undefined' && messageSettings && !messageSettings.hideErrorMessage) {
        Notification({
          type: NOTIFICATION_TYPE_ERROR,
          message: 'Network error. Please check your connection and try again.',
        });
      }
      return Promise.reject(error);
    }
    
    if (status == 401) {
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login';
      }
      return Promise.reject(error);
    }

    if (typeof window !== 'undefined' && messageSettings && !messageSettings.hideErrorMessage) {
      if (messageSettings.errorMessage !== '') {
        Notification({
          type: NOTIFICATION_TYPE_ERROR,
          //@ts-ignore
          message: messageSettings.errorMessage,
        });
      } else if (data?.message) {
        Notification({
          type: NOTIFICATION_TYPE_ERROR,
          message: data.message,
        });
      } else if (typeof data?.data === 'string') {
        Notification({
          type: NOTIFICATION_TYPE_ERROR,
          message: data.data,
        });
      } else if (data?.errors && Array.isArray(data.errors)) {
        // Handle validation errors array
        Notification({
          type: NOTIFICATION_TYPE_ERROR,
          message: data.errors[0] || 'Validation error occurred.',
        });
      } else {
        switch (status) {
          case StatusCode.ResourceNotFound:
            Notification({
              type: NOTIFICATION_TYPE_ERROR,
              message: 'Resource Not Found.',
            });
            break;
          case StatusCode.ResourceUnauthorized:
            Notification({
              type: NOTIFICATION_TYPE_ERROR,
              message: 'Unauthorized Access.',
            });
            break;
          case StatusCode.ClientForbidden:
            Notification({
              type: NOTIFICATION_TYPE_ERROR,
              message: 'Forbidden Access.',
            });
            break;
          case StatusCode.Conflict:
            Notification({
              type: NOTIFICATION_TYPE_ERROR,
              message: 'Conflict Error.',
            });
            break;
          default:
            Notification({
              type: NOTIFICATION_TYPE_ERROR,
              message: error?.message || 'Something Went Wrong.',
            });
            break;
        }
      }
    }
    return Promise.reject(error);
  };

  http.interceptors.request.use((request) => {
    // You can add request interceptors here
    return request;
  });

  http.interceptors.response.use(
    (response) => {
      handleSuccess(response);
      return response.data;
    },
    (error) => {
      // Pass the full error object, not just response
      return handleError(error);
    }
  );

  switch (method) {
    case 'get':
      return http.get(apiUrl, finalConfig);
    case 'post':
      return http.post(apiUrl, apiData, finalConfig);
    case 'put':
      return http.put(apiUrl, apiData, finalConfig);
    case 'patch':
      return http.patch(apiUrl, apiData, finalConfig);
    case 'delete':
      return http.delete(apiUrl, finalConfig);
    default:
      return http.request(finalConfig);
  }
};

Http.get = ({ url, config, messageSettings }: GetRequestInterface): any => {
  return Http({
    url,
    config,
    messageSettings: { ...defaultSettings, ...messageSettings },
    method: 'get',
  });
};

Http.post = ({
  url,
  data,
  config,
  messageSettings,
}: PostRequestInterface): any =>
  Http({
    url,
    data,
    config,
    messageSettings: { ...defaultSettings, ...messageSettings },
    method: 'post',
  });

Http.put = ({ url, data, config, messageSettings }: PutRequestInterface): any =>
  Http({
    url,
    data,
    config,
    messageSettings: { ...defaultSettings, ...messageSettings },
    method: 'put',
  });

Http.patch = ({
  url,
  data,
  config,
  messageSettings,
}: PostRequestInterface): any =>
  Http({
    url,
    data,
    config,
    messageSettings: { ...defaultSettings, ...messageSettings },
    method: 'patch',
  });

Http.delete = ({
  url,
  data,
  config,
  messageSettings,
}: DeleteRequestInterface): any =>
  Http({
    url,
    data,
    config,
    messageSettings: { ...defaultSettings, ...messageSettings },
    method: 'delete',
  });

Http.request = ({ config }: RequestInterface): any =>
  Http({
    config,
    url: '',
  });

export default Http;

