import React from 'react'
import { useState } from 'react';
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import DevicesIcon from '@mui/icons-material/Devices';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { Modal } from '@material-ui/core';
import { storage } from './firebase/firebase'
// import { db, storage, auth } from "firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const Sidebar = () => {

    const [open, setopen] = useState(false);
    const [uploading, setUploding] = useState(false);
    const [file, setfile] = useState(null);

    const handleClose = () => {
        setopen(false);
    }

    const handleOpen = () => {
        setopen(true);
    }

    const handleCloseBtn = () => {
        setopen(false);
    }

    const handleChange = (e) => {
        console.log(e.target.files[0]);
        if (e.target.files[0]) {
            setfile(e.target.files[0]);
        }
    }

    const handleUpload = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setUploding(true);

        storage.ref(`files/${File.name}`).put(file).then(snapshot => {
            console.log(snapshot)
        });

        // const storageRef = ref(storage, `files/${file.name}`);

        // const snapshot = uploadBytes(storageRef, file);
        // const url = getDownloadURL(snapshot.ref);

    }
    return (
        <>
            <Modal open={open} onClose={handleClose} >
                <div className='Model_pop'>
                    <form>
                        <div className='model_Heading'>
                            <h3>Select file you want to upload </h3>

                            <img className='closebtn' onClick={handleCloseBtn} src='http://res.freestockphotos.biz/pictures/15/15107-illustration-of-a-red-close-button-pv.png' />


                        </div>
                        <div className='model_body'>
                            {
                                uploading ? (<p className='uploading'>File Uploading....</p>) :
                                    <>
                                        <input type='file' onChange={handleChange} />

                                        <input type='submit' className='post_submit' onClick={handleUpload} />

                                    </>

                            }
                        </div>
                    </form>
                </div>
            </Modal>
            <div className='sidebr'>
                <div className='sidebar_btn'>
                    <button className='new' onClick={handleOpen} >
                        +   <span>New</span>
                    </button>
                </div>

                <div className='options'>

                    <div className='data data_active'>
                        <MobileScreenShareIcon />
                        <span><b>My Drive</b></span>
                    </div>
                    <div className='data'>
                        <DevicesIcon />
                        <span>Computer</span>
                    </div>
                    <div className='data'>
                        <QueryBuilderIcon />
                        <span>Share with me</span>
                    </div>
                    <div className='data'>
                        <PeopleAltIcon />
                        <span>Recent</span>
                    </div>
                    <div className='data'>
                        <StarBorderIcon />
                        <span>Starred</span>
                    </div>
                    <div className='data'>
                        <DeleteIcon />
                        <span>Tash</span>
                    </div>

                </div>
                <hr />
                <div className='options'>
                    <div className='data'>
                        <CloudQueueIcon />
                        <span>storage</span>
                    </div>

                    <div className='progressBar'>
                        <progress size='tiny' value='50' max='100' />
                        <span>6.45 GB of 15 GB used</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar
