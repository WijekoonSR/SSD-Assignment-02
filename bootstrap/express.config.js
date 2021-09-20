import express from "express";
import session from "express-session";

const app = express();

app.set('view engine', 'ejs');

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

export default app;