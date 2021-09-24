import { GoogleLogin } from "react-google-login";
import Cookie from "js-cookie";
import axios from "axios";
import '../styles/styles.css'
import { useHistory } from "react-router";


function GoogleAuth() {
    const history = useHistory();

    console.log(process.env.REACT_APP_URL)
    console.log(process.env.REACT_APP_URL)

    const axiosApiCall = (url, method, body = {}) =>
        axios({
            method,
            url: `${process.env.REACT_APP_API_URL}${url}`,
            data: body,
        });

    const onSuccess = (response) => {
        // axiosApiCall("auth/google", "post", { access_token }).then((res) => {
        //     const { user, token } = res.data;

        // })
        Cookie.set("token", response.accessToken);
        Cookie.set("userName", response.profileObj.name)
        Cookie.set("userEmail", response.profileObj.email)
        Cookie.set("userProfile", response.profileObj.imageUrl)

        history.push("/google-auth/drive-upload");


    };

    return (
        <div className="App">
            <header className="App-header">

                <h3>Sign Up To Upload Image</h3>
                <p className="fs-6">Select Below Button For Signing-up</p>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Sign up with Google"
                    onSuccess={onSuccess}
                    onFailure={() => { }}
                />

            </header>
        </div>
    );
}

export default GoogleAuth;
