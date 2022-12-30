// Imports
import Header from '../../components/Header';
import './Profile.module.css';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import Pin from '../../components/Pin';

// Material UI Imports
import ProfilePictureLogo from '../../components/ProfilePictureLogo';

export default function Profile() {
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
            <Pin />
        </div>
        
    )
}