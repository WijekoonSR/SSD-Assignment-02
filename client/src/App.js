import logo from './logo.svg';
import './styles/styles.css';
import { GoogleLogin } from "react-google-login";
import Cookie from "js-cookie";
import axios from "axios";

function App() {
  console.log(process.env.REACT_APP_URL)
  console.log(process.env.REACT_APP_URL)

  const axiosApiCall = (url, method, body = {}) =>
    axios({
      method,
      url: `${process.env.REACT_APP_API_URL}${url}`,
      data: body,
    });

  const onSuccess = (response) => {
    console.log(response.accessToken);
    const access_token = response.accessToken;
    axiosApiCall("auth/google", "post", { access_token }).then((res) => {
      const { user, token } = res.data;
      Cookie.set("token", token);

    });
  };

  return (
    <div className="App">
      <header className="App-header">

        {process.env.REACT_APP_API_URL}
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

export default App;
