export declare class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    status: string;
    constructor(error: {
        message: string;
        statusCode: number;
        status: string;
    });
}
export declare class BadRequestError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
export declare class UnauthorizedError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
export declare class ForbiddenError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
export declare class NotFoundError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
export declare class ConflictError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
export declare class ValidationError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
export declare class TooManyRequestsError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
export declare class InternalServerError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
export declare class JWTError extends AppError {
    constructor({ message, statusCode, status }: {
        message?: string | undefined;
        statusCode?: number | undefined;
        status?: string | undefined;
    });
}
