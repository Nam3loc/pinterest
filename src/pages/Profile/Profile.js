// Imports
import Header from '../../components/Header';
import './Profile.module.css';
import { Link } from 'react-router-dom';

// Material UI Imports
import ProfilePictureLogo from '../../components/ProfilePictureLogo';

export default function Home() {
    return (
        <div>
            <Header />
            <ProfilePictureLogo />
            <h2>Insert Name Here</h2>
            <p>Insert @username</p>

            <Link to='/pins/new'>
                <button>Share</button>
            </Link>

            <Link to='/profile/edit'>
                <button>Edit Profile</button>
            </Link>
        </div>
        
    )
}