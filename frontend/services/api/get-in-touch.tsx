import http from '../http';

export const createInquiry = (body: any) => {
    return http.post({
        url: `/api/inquiries`,
        data: body,
    });
};


