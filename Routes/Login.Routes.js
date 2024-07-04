import { Router } from "express";
import passport from "passport";
import AuthServices from "../Services/Auth.Services.js";

const authService = new AuthServices();
const router = Router();



export default router;
