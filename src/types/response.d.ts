export interface Response<T> {
    message: string;
    errors: Record<string, any>;
    status: string;
    status_code: number;
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    data: T[];
}

export interface ResponseSingle<T> {
    message: string;
    errors: Record<string, any>;
    status: string;
    status_code: number;
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    data: T;
}

export interface AxiosErrorResponse {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
}