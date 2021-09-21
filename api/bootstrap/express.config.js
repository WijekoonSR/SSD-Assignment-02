import express from "express";
import session from "express-session";
import dotenv from "dotenv";

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

export default app;