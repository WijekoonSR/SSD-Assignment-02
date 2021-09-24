import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';

import './index.css';
import App from './App';
import Home from './components/Home';
import GoogleAuth from './components/GoogleAuth';
import reportWebVitals from './reportWebVitals';
import DriveUpload from './components/DriveUpload'
import LinkedInAuth from './components/LinkedInAuth';


import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FbAuth from './components/FbAuth';
import LinkedInPublish from './components/LinkedInPublish';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/google-auth">
          <GoogleAuth />
        </Route>
        <Route path="/google-auth/drive-upload">
          <DriveUpload />
        </Route>
        <Route exact path="/linkedin-auth">
          <LinkedInAuth />
        </Route>
        <Route path="/linkedIn-auth/add-post">
          <LinkedInPublish />
        </Route>
        <Route path="/fb-auth">
          <FbAuth />
        </Route>
        <Route path="/linkedin">
          <LinkedInPopUp />
        </Route>
      </Switch>
    </Router>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
