import express from 'express';
import passport from "passport";
import AuthController from '../../controllers/auth/auth.controller';

const router = express.Router();

router.route('/google')
    .get((req, res)=>{
        res.send("Welcome Google Auth")
    })
    .post(
        passport.authenticate("google-token", { session: false }),
        AuthController.googleOauth
    );

export default router;