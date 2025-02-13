import { JwtPayload } from 'jsonwebtoken';
import type { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: string | JwtPayload;
  }
}
