import express from 'express';
import { writeData } from '../../controllers/drive-file/drive-file.controller';

const router = express.Router();

router.route('/')
    .get((req, res)=>{
        res.send("Welcome Google Drive upload")
    })
    .post(writeData);

export default router;