"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTError = exports.InternalServerError = exports.TooManyRequestsError = exports.ValidationError = exports.ConflictError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.AppError = void 0;
// src/utils/errors.ts
class AppError extends Error {
    constructor(error) {
        super(error.message);
        this.statusCode = error.statusCode;
        this.status = error.status;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
class BadRequestError extends AppError {
    constructor({ message = "Bad request", statusCode = 400, status = "BAD_REQUEST" }) {
        super({ message, statusCode, status });
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends AppError {
    constructor({ message = "Unauthorized", statusCode = 401, status = "UNAUTHORIZED" }) {
        super({ message, statusCode, status });
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends AppError {
    constructor({ message = "Forbidden", statusCode = 403, status = "FORBIDDEN" }) {
        super({ message, statusCode, status });
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends AppError {
    constructor({ message = "Resource not found", statusCode = 404, status = "NOT_FOUND" }) {
        super({ message, statusCode, status });
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends AppError {
    constructor({ message = "Conflict", statusCode = 409, status = "CONFLICT" }) {
        super({ message, statusCode, status });
    }
}
exports.ConflictError = ConflictError;
class ValidationError extends AppError {
    constructor({ message = "Validation error", statusCode = 422, status = "VALIDATION_ERROR" }) {
        super({ message, statusCode, status });
    }
}
exports.ValidationError = ValidationError;
class TooManyRequestsError extends AppError {
    constructor({ message = "Too many requests", statusCode = 429, status = "TOO_MANY_REQUESTS" }) {
        super({ message, statusCode, status });
    }
}
exports.TooManyRequestsError = TooManyRequestsError;
class InternalServerError extends AppError {
    constructor({ message = "Internal server error", statusCode = 500, status = "INTERNAL_SERVER_ERROR" }) {
        super({ message, statusCode, status });
    }
}
exports.InternalServerError = InternalServerError;
class JWTError extends AppError {
    constructor({ message = "JWT Error", statusCode = 401, status = "JWT_ERROR" }) {
        super({ message, statusCode, status });
    }
}
exports.JWTError = JWTError;
//# sourceMappingURL=errors.js.map