import { GoogleLogin } from "react-google-login";
import Cookie from "js-cookie";
import axios from "axios";
import '../styles/styles.css'
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Button from "@restart/ui/esm/Button";

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

function FbAuth() {
    const history = useHistory();


    
    const onSuccess = (data) => {
       

    };

    return (
        <div className="App">
            <header className="App-header">

                <h3>Sign Up To Upload Image</h3>
                <p className="fs-6">Select Below Button For Signing-up</p>
                <div className="w-100">
                </div>
                


            </header>
        </div>
    );
}

export default FbAuth;
