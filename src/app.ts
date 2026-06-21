import express, { Request, Response, NextFunction } from "express";
import scoreRoutes from "./routes/scores.route";
import { AppError } from "./utils/errors";
import cors from "cors";

const allowedOrigins = ["http://localhost:5173"];

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(null, false);
      }
    },
    credentials: true,
    exposedHeaders: ["Authorization"],
  }),
);

app.use(express.json());
app.use("/api/gscores", scoreRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
      status: err.status,
    });
  }
  res.status(500).json({
    statusCode: 500,
    message: "Internal Server Error",
    status: "INTERNAL_SERVER_ERROR",
  });
});

export default app;
