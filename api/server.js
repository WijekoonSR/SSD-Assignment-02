import app from './bootstrap/routes.config';
import {google} from 'googleapis';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import './app/services/google.service';

import {db_url} from './config/db.config';

const PORT = process.env.PORT || 8080;

mongoose.connect(db_url).then(()=>{
    console.log(`DB connection established`)
})


app.listen((PORT), () => {
    console.log(`app is listen on ${PORT}`)
})