import React, { useRef, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

import { toast } from 'react-toastify';

function FileUpload() {

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
        console.log(Cookies.get('token'))
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('uploaded_file', file); // appending file
        formData.append('REFRESH_TOKEN', Cookies.get('token')); // appending file
        axios.post('http://localhost:8080/api/drive-upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            toast('🦄 Uploaded Succesfully!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            // getFile({
            //     name: res.data.name,
            //     path: 'http://localhost:4500' + res.data.path
            // })
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} />

                <div className="d-flex flex-row my-1">
                    <div className="me-2">Progress: </div>
                    <div className="progessBar" style={{ width: progress }}>
                        <div>{progress}</div>
                    </div>

                </div>
                <button onClick={uploadFile} className="upbutton">
                    Upload
                </button>
                <hr />
                {/* displaying received image*/}
                {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </div>
    );
}

export default FileUpload;