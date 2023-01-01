// Imports
import styles from './CreatePin.module.css';

// Material UI Imports
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

export default function CreatePin() {
    // const uploadPin = () => {
        
    // }

    return (
        <div className={styles.pageWrapper}>
            <form className={styles.wrapper} action='/pins' method='POST'>
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

                <div className={styles.savePin}>
                    <input className={styles.saveButton} type='submit' value='Create Pin' />
                </div>
            </form>
        </div>
    )
}