import http from '../http';

export const createInquiry = (body: any) => {
    // Ensure the URL doesn't have double /api
    // baseURL should be: https://data-scube-be.onrender.com
    // url should be: /api/inquiries
    // Result: https://data-scube-be.onrender.com/api/inquiries
    return http.post({
        url: `/api/inquiries`,
        data: body,
    });
};


