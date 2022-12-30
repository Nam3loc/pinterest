// Imports
import styles from './CreatePin.module.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

// Material UI Imports
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

export default function CreatePin() {
    // const [selectedFile, setSelectedFile] = useState(null);

    // const fileSelectedHandler = (evt) => {
    //     setSelectedFile(
    //         evt.target.files[0]
    //     )
    // }

    // const fileUploadHandler = (evt) => {
    //     const fd = new FormData()
    //     fd.append('image', selectedFile, selectedFile.name)
    //     axios.post(process.env.DATABASE_URL, fd, {
    //             onUploadProgress: progessEvent => {
    //             console.log('Upload Progress' + Math.round(progessEvent.loaded / progessEvent.total * 100) + '%')
    //         }
    //     })
    //         .then(res => {
    //             console.log(res);
    //         })
    // }

    const uploadPin = () => {
        <Link to='/pins' />
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.moreIcon}>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </div>
                    <div className={styles.boardAndSave}>
                        <select className={styles.dropdown} name='boards' id='boards'>
                            <option value="" disabled selected hidden>Boards</option>
                            <option value='First'>First</option>
                            <option value='Second'>Second</option>
                            <option value='Third'>Third</option>
                        </select>
                        <button className={styles.save}>Save</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.picInput}>
                        <input className={styles.link} type='text' placeholder='image url' />
                        {/* <input 
                            // style={{display: 'none'}} 
                            type='file' 
                            onChange={fileSelectedHandler}
                            // ref={fileInput => this.fileInput = fileInput}
                            />
                        <button onClick={() => this.fileInput.click()}>Pick File</button> */}
                        {/* <button onClick={fileUploadHandler}>Upload</button> */}
                        <button className={styles.saveButton}>Save from site</button>
                    </div>

                    <div className={styles.descriptionWrapper}>
                        
                        <input className={styles.title} placeholder="Add your title" type="text" />
                        <button className={styles.hide} type='submit'>Submit</button>

                        <h1>Account logo and name here</h1>
                        
                        <input className={styles.description} placeholder="Tell everyone what your pin is about" type="text" />
                        <button className={styles.hide} type='submit'>Submit</button>
                        
                        <input className={styles.link} placeholder="Add a destination link" type="text" />
                        <button className={styles.hide} type='submit'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}