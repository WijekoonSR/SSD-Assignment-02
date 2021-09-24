import express from 'express';
import { getAccessToken, getLinkedinId, publishContent } from '../../controllers/auth-linkedIn/auth-linkedIn.controller';

const router = express.Router();

router.route('/access-token')
    .get((req, res) => {
        res.send("Welcome LinkedIn access token")
    })
    .post(getAccessToken);

router.route('/linkedID')   
    .post(getLinkedinId);

    
router.route('/publish')   
.post(publishContent);

export default router;