
//client id
const CLIENT_ID = process.env.CLIENT_ID;
//client secret
const CLIENT_SECRET = process.env.CLIENT_SECRET;
//redirect uri
const REDIRECT_URI = process.env.REDIRECT_URI;
//refresh token
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

//intialize auth client
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

//setting our auth credentials
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//initialize google drive
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

//file path for out file
const filePath = path.join(__dirname, 'filename.format');

export { drive, filePath };