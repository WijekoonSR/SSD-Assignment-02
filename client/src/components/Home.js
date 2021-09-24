import { Button } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styles.css'

const Home = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h3>Select Authorization</h3>
                    <p className="fs-6">Select Google Authorzation For Uploading image to drive and LinkedIn Authorization For Uploading Post</p>
                    <Link to="/google-auth">
                        <Button className="my-2" variant="outline-primary" size="md"> Google Authorization
                        </Button>
                    </Link>
                    <Link to="/linkedin-auth">
                        <Button className="my-2" variant="outline-info" size="md">
                            LinkedIn  Authorization
                        </Button>
                    </Link>

                </header>
            </div>
        </>
    );
}

export default Home;