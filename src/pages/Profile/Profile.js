// Imports
import Header from '../../components/Header';
import './Profile.module.css';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import Pin from '../../components/Pin/Pin';
import * as userService from '../../utilities/users-service';

// Material UI Imports
import ProfilePictureLogo from '../../components/ProfilePictureLogo';

export default function Profile({ user, setUser }) {
    function handleLogout () {
        // Delegate to the users-service
        userService.logOut()
        setUser(null)
    }

    return (
        <div>
            <Header />
            <ProfilePictureLogo />
            <h2>Insert Name Here</h2>
            <p>Insert @username</p>

            <div className={styles.Profile}>
                <Link to='/pins/new'>
                    <button>Share</button>
                </Link>

                <Link to='/profile/edit'>
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
        
    )
}