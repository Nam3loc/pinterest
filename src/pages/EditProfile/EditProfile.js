// Imports
import styles from './EditProfile.module.css';
import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service';
import { edit } from '../../utilities/users-api'
import { useParams } from 'react-router-dom';

export default function EditProfile({ picture, firstName, lastName, about, username }) {
    const [editedProfile, setEditedProfile] = useState('');
    const [error, setError] = useState(false);

    const { id } = useParams()

    useEffect(() => {
        async function getUserInfo() {
            const fetchingUserInfo = await getUser();
            setEditedProfile(fetchingUserInfo);
        }
        getUserInfo();
        console.log(getUserInfo);
    }, []);

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
         console.log('Edit Profile Handle submit worked');
          const editUserInfo = await edit(id);
          setEditedProfile(editUserInfo);
        } catch {
          setError({ error: "Profile not edited"});
        }
     }

    return (
        <>
            <Header />
            <div className={styles.page}>
                <h1>Public profile</h1>
                <p>People visiting your profile will see the following info</p>
                <p className={styles.titles}>Photo</p>
                <br />
                
                <div className={styles.picture}>
                    <p className={styles.titles}>Profile Picture</p>
                    <input className={styles.inputName} type='text' placeholder='Insert picture url' />
                    <br />
                </div>
                <br /><br />
                <div className={styles.nameInfo}>
                    <p className={styles.titles}>First name</p>
                    <input className={styles.inputName} type='text' placeholder={editedProfile.firstName} />
                    <br /><br />
                    <p className={styles.titles}>Last name</p>
                    <input className={styles.inputName} type='text' placeholder={editedProfile.lastName} />
                    <br /><br />
                    <p className={styles.titles}>Username</p>
                    <input className={styles.inputName} type='text' placeholder={editedProfile.username} />
                </div>
                <br /><br />
                <p className={styles.titles}>About</p>
                <input className={styles.aboutInput} type='text' placeholder={editedProfile.about} />
                <br /><br />
                <div className={styles.footerButtonsContainer}>
                    <button className={styles.footerButtons}>Reset</button>
                    <button className={styles.footerButtons} handleSubmit={handleSubmit}>Save</button>
                </div>
            </div>
        </>
    )
}