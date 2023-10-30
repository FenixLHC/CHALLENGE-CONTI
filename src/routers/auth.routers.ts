import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.controllers";
import { checkJwt, checkJwtPublic } from "../middlewares/session";

const router= Router()

router.post('/register',checkJwtPublic, registerCtrl)

router.post('/login',checkJwtPublic, loginCtrl)

export default router