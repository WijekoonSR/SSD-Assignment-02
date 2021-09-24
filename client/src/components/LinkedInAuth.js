import { GoogleLogin } from "react-google-login";
import Cookie from "js-cookie";
import axios from "axios";
import '../styles/styles.css'
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Button from "@restart/ui/esm/Button";

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

function LinkedInAuth() {
    const history = useHistory();


    function getAccessToken(authCode) {
        try {
            const data = {
                grant_type: 'authorization_code',
                code: authCode,
                redirect_uri: 'http://localhost:3000/linkedin-auth',
                client_id: process.env.REACT_APP_LinkedIn_Client_ID,
                client_secret: process.env.REACT_APP_LinkedIn_Client_SECRET
            }

            console.log(process.env.REACT_APP_LinkedIn_Client_ID)

            axios({
                url: 'https://www.linkedin.com/oauth/v2/accessToken',
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-urlenconded'
                },
                params: data
            }).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const onSuccess = (data) => {
        console.log(data.code);
        Cookie.set("code", data.code)
        toast("Sucessfully Authenticated!");
        history.push("/linkedIn-auth/add-post");

    };

    return (
        <div className="App">
            <header className="App-header">

                <h3>Sign Up To Upload Image</h3>
                <p className="fs-6">Select Below Button For Signing-up</p>
                <div className="w-100">
                </div>
                <LinkedIn
                    clientId="78bou1wu93yf1m"
                    onFailure={() => { }}
                    onSuccess={onSuccess}
                    redirectUri="http://localhost:3000/linkedin">

                    <img style={{ width: '150px' }} className="img-fluid" src={linkedin} alt="Log in with Linked In" />

                </LinkedIn>


            </header>
        </div>
    );
}

export default LinkedInAuth;
