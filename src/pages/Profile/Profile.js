// Imports
import Header from '../../components/Header';
import './Profile.module.css';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import * as userService from '../../utilities/users-service';
import { getUser } from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import { findUserById } from '../../utilities/users-api';

// Material UI Imports
import ProfilePictureLogo from '../../components/ProfilePictureLogo';

export default function Profile({ user, setUser }) {
    const [profile, setProfile] = useState({});

    function handleLogout () {
        // Delegate to the users-service
        userService.logOut()
        setUser(null)
    }

    useEffect(() => {
        async function getUserInfo() {
            const fetchingUserInfo = await findUserById(user._id);
            setProfile(fetchingUserInfo);
        }
        getUserInfo();
        console.log(getUserInfo);
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                {
                    profile.picture ?
                    <img className={styles.profilePicture} src={profile.picture} />
                    :
                    <ProfilePictureLogo />
                }

                <div className={styles.name}>
                    <h2>{profile.firstName}</h2>
                    &nbsp;
                    <h2>{profile.lastName}</h2>
                </div>

                <p>Username: {profile.username}</p>

                <div className={styles.Profile}>
                    <Link to='/pins/new'>
                        <button>Share</button>
                    </Link>

                    <Link to={`/edit-profile/${profile._id}`}>
                        <button>Edit Profile</button>
                    </Link>

                    <Link to="" onClick={handleLogout}>
                        <button>Log Out</button>
                    </Link>
                </div>

                <br />
                <br />

                <div className={styles.Profile}>
                    <Link to='/pins/created'>
                        <button>Created Pins</button>
                    </Link>

                    <Link to='/pins/board'>
                        <button>Boards</button>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}