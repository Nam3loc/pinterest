// Imports
import styles from './ShowPin.module.css';
import EditPin from '../../components/EditPin/EditPin';
import DeletePin from '../../components/DeletePin/DeletePin';
import Header from '../../components/Header';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { showPin } from '../../utilities/pin-api';
import Pin from '../../components/Pin/Pin';

// Material UI Imports
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

export default function ShowPin({ picture, title, description, link, id }) {
    const [createdPin, setCreatedPin] = useState([]);

    useEffect(() => {
        async function getPin() {
            const fetchingPin = await showPin(id);
            setCreatedPin(fetchingPin);
        }
        getPin();
    }, [id]);

    const loaded = () => {
        return (
            <div className={styles.pageWrapper}>
                <div className={styles.wrapper}>
                    <Header />
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
    
                    {
                        createdPin && (
                            <div className={styles.infoWrapper}>
                                <div className={styles.pinInput}>
                                    <img src={createdPin.picture} alt={createdPin.title} />
                                </div>
    
                                <div className={styles.descriptionWrapper}>
                                    <h2>Title: {createdPin.title}</h2>
                                    <p>Description: {createdPin.description}</p>
                                    <p>Link: {createdPin.link}</p>
                                </div>
                            </div>
                        )
                    }
    
                    <div className={styles.buttons}>
                        <Link to='/pins/edit/:id'>
                            <button>Edit Pin</button>
                        </Link>
                        <DeletePin id={id} />
                    </div>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        createdPin ? loaded() : loading()
    )

}