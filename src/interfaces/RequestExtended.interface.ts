import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export default interface RequestExt extends Request {
    user?: string | JwtPayload
}