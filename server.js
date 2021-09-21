import app from './bootstrap/roues.config';
import {google} from 'googleapis';
import path from 'path';
import fs from 'fs';

const PORT = process.env.PORT;




app.listen((PORT), () => {
    console.log(`app is listen on ${PORT}`)
})