// Imports
import styles from './EditProfile.module.css';
import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service';
import { edit } from '../../utilities/users-api'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function EditProfile({ picture, firstName, lastName, about, username }) {
    const [editedProfile, setEditedProfile] = useState('');
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        picture: '',
        firstName: '',
        lastName: '',
        about: '',
        username: ''
    });

    const { id } = useParams()

    useEffect(() => {
        async function getUserInfo() {
            const fetchingUserInfo = await getUser();
            setEditedProfile(fetchingUserInfo);
        }
        getUserInfo();
        console.log(getUserInfo);
    }, []);

    const handleChange = async(evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        setError('');
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const editUserInfo = await edit(id, formData);
            setEditedProfile(editUserInfo);
        } catch (err) {
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
                    <input className={styles.inputName} name='picture' value={formData.picture} type='text' placeholder='Insert picture url' onChange={handleChange} />
                    <br />
                </div>
                <br /><br />
                <div className={styles.nameInfo}>
                    <p className={styles.titles}>First name</p>
                    <input className={styles.inputName} name='firstName' value={formData.firstName} type='text' placeholder={editedProfile.firstName} onChange={handleChange} />
                    <br /><br />
                    <p className={styles.titles}>Last name</p>
                    <input className={styles.inputName} name='lastName' value={formData.lastName} type='text' placeholder={editedProfile.lastName} onChange={handleChange} />
                    <br /><br />
                    <p className={styles.titles}>Username</p>
                    <input className={styles.inputName} name='username' value={formData.username} type='text' placeholder={editedProfile.username} onChange={handleChange} />
                </div>
                <br /><br />
                <p className={styles.titles}>About</p>
                <input className={styles.aboutInput} name='about' value={formData.about} type='text' placeholder={editedProfile.about} onChange={handleChange} />
                <br /><br />
                <div className={styles.footerButtonsContainer}>
                    <button className={styles.footerButtons}>Reset</button>

                    <Link to={`/profile`}>
                        <button className={styles.footerButtons} onClick={handleSubmit}>Save</button>
                    </Link>
                </div>
            </div>
        </>
    )
}