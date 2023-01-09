// Imports
import styles from './EditProfile.module.css';
import Header from '../../components/Header';

export default function EditProfile() {
    return (
        <>
            <Header />
            <div className={styles.page}>
                <h1>Public profile</h1>
                <p>People visiting your profile will see the following info</p>
                <p className={styles.titles}>Photo</p>
                <br />
                
                <div className={styles.picture}>
                    <input type='image'></input>
                    <br />
                    <button className={styles.change}>Change</button>
                </div>
                <br /><br />
                <div className={styles.nameInfo}>
                    <p className={styles.titles}>First name</p>
                    <input className={styles.inputName} type='text' placeholder="First name" />
                    <br /><br />
                    <p className={styles.titles}>Last name</p>
                    <input className={styles.inputName} type='text' placeholder="Last name" />
                </div>
                <br /><br />
                <p className={styles.titles}>About</p>
                <input className={styles.aboutInput} type='text' placeholder="Tell your story" />
                <br /><br />
                <p className={styles.titles}>Website</p>
                <input className={styles.inputBox} type='text' placeholder="Add a link to drive traffic to your site" />
                <br /><br />
                <p className={styles.titles}>Username</p>
                <input className={styles.inputBox} type='text' placeholder="Username" />
                <br /><br />
                <div className={styles.footerButtonsContainer}>
                    <button className={styles.footerButtons}>Reset</button>
                    <button className={styles.footerButtons}>Save</button>
                </div>
            </div>
        </>
    )
}