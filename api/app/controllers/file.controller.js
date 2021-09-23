import { drive, oauth2Client } from '../../config/google_oAuth.config';


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