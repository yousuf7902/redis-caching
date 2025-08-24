import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class ResponseTimeMiddleware implements NestMiddleware{
    use(req: any, res: any, next: NextFunction) {
        const start = Date.now();
        res.on('finish', () => {
            const duration = Date.now() - start;
            console.log(`${req.method} ${req.url} took ${duration}ms`);
        });
        next();
    }
}