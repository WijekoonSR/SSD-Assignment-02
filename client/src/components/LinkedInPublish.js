import React, { useRef, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import '../styles/styles.css'

import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';

function LinkedInPublish() {

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const [subject, setSubject] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
        console.log(Cookies.get('token'))
    }

    const uploadPost = () => {
       
        const formData = new FormData();
        // formData.append('uploaded_file', file); // appending file
        // formData.append('REFRESH_TOKEN', Cookies.get('token')); // appending file

        axios.post('http://localhost:8080/api/linked-in/linkedID', formData, {
        }).then(res => {
            Cookies.set("token", res.id);

            const formData = new FormData();

            formData.append('subject', subject)
            formData.append('tiltle', title)
            formData.append('text', text)

            axios.post('http://localhost:8080/api/linked-in/publish', formData, {
            }).then(res => {

                toast('Publish Succesfully!');
            });            
        });
        toast('🦄 Publish Succesfully!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });

    }

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h4>Upload Status</h4>
                <div class="form-group">
                        <label for="exampleInputEmail1">Subject</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Text</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <Button onClick={uploadPost} className="btn-primary my-3">Submit</Button>
                </header>
            </div>
        </div>
    );
}

export default LinkedInPublish;