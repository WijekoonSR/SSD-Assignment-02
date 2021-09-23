import multer from 'multer';
import { drive, oauth2Client } from '../../../config/google_oAuth.config';
import fs from 'fs';

var fileName;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        fileName = Date.now() + '-' + file.originalname
        cb(null, fileName)
    }
})
var upload = multer({ storage: storage }).single('uploaded_file')

const writeData = (req, res) => {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        uploadFile(req.body.REFRESH_TOKEN, fileName)
            .then(()=>{
                return res.status(201).send("created");
            })
            .catch((err)=>{
                return res.status(500).json(err);
            })

    })

    // if (isUploaded) {
    //     return res.status(201)
    // } else {
    //     return res.status(500).json({ "data": "error" })
    // }
}



//function to upload the file
async function uploadFile(REFRESH_TOKEN, fileName) {
    try {
        const fileMetadata = {
            name: fileName,
        };
        const media = {
            mimeType: 'application/json',
            body: fs.createReadStream(`uploads/${fileName}`),
        };

        oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

        const response = await drive.files.create({
            oauth2Client,
            resource: fileMetadata,
            media,
            fields: 'id',
        });
        // report the response from the request
        console.log(response.data);
    } catch (error) {
        //report the error message
        console.log(error.message);
    }
}

// const fileController = (req, res) => {

//     let fileData = {

//     }
// }

export { writeData }