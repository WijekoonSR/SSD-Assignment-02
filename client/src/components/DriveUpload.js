import { Button } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styles.css'
import FileUpload from './FileUpload';
import Cookie from "js-cookie";


const DriveUpload = () => {

    const userName = Cookie.get("userName");
    const userEmail = Cookie.get("userEmail");
    const userProfile = Cookie.get("userProfile");
    console.log(userProfile)

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h5>Hii {userName}</h5>
                    <img className="img-fluid my-2" src={userProfile} alt="dd"/>
                    <h6>Select Image To Upload Google Drive</h6>
                    <p className="fs-6">Select Choose File To Select Image.</p>
                    <p className="fs-6 text-primary">If You Want To Cancel Selected Image And Re-Upload Image Please Select Choose File Again</p>
                    <FileUpload />
                    <Link to="/" >
                        <Button> Back To Home</Button>
                    </Link>
                </header>
            </div>
        </>
    );
}

export default DriveUpload;