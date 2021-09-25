#In this application it has seperated frontend and backend folders.

> Frontend folder = client
> Backend = api folder

Before Starting Running This Application You Need To Create Gooogle Authentication and LinkedIn authentications in Developer platforms relevant to each oAuth Authorization Server.

To get google Authentications and API creditintials Please kindly vist to https://console.cloud.google.com for Google and create application under the category web application. And to get LinkedIn Authentication and Creditintials please kindly vist to https://developer.linkedin.com/.

#in the app you created in  https://console.cloud.google.com you need to add Test Users in OAuth Consent Screen(For this please add the email that you are going to log by using this address) and add below details in creditials page under the application that you created.

    Authorized JavaScript origins URIs >  http://localhost:3000
    Authorized redirect URIs > https://developers.google.com/oauthplayground

#in the app you created in https://www.linkedin.com/developers under the Auth catregory you need to add redirect url in under the catgory "Authorized redirect URLs for your app" and add http://localhost:3000/linkedin url to it.

#you need to create  .env file inside the both api folder and client folder.
> structure
    -api
        -.env
    -client
        -.env

In the api/.env file you need to insert below details,


    CLIENT_ID = #Your Goolgle Client ID
    CLIENT_SECRET = #Your Goolgle Secret
    REDIRECT_URI = 'https://developers.google.com/oauthplayground' #please don't change this


    LinkedIN_CLIENT_ID= #Your LinkedIn Client ID
    LinkedIN_CLIENT_SECRET=  #Your LinkedIn Secret
    LinkedIN_REDIRECT_URI=http://localhost:3000/linkedin #please don't change this

    DB_HOST = localhost #your mongo db host
    DB_PORT = 27017 #your mongo db port
    DB_NAME = SSD_DB #please dont change this

In the client/.env file you need to insert below details

    REACT_APP_API_URL = localhost/api  #please don't change this
    REACT_APP_GOOGLE_CLIENT_ID = #Your Goolgle Client ID

    REACT_APP_LinkedIn_Client_ID = #Your LinkedIn Client ID
    REACT_APP_LinkedIn_Client_SECRET =#Your LinkedIn Secret
    REACT_APP_LinkedIn_CB_URL = http://localhost:3000/linkedin

*** Please not .env files have same values but whenver creating .env in React you need to add "REACT_APP" prefix for each environment variables 

To run the application first you need run api and then after that need to run client.

> to run api, go to api folder and run below command in cmd
        npm install
        npm run dev:start

> to run client app, go to client folder and run below command in cmd
        npm install
        npm start

*** please kindly install all node modules before running the application by using (npm install). if you have already installed ignore npm install command.

