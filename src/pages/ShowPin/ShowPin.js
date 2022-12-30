// Imports
import styles from './ShowPin.module.css';

// Material UI Imports
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function ShowPin() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <MoreHorizIcon />
                <label for='boards'>Boards</label>
                    <select name='boards' id='boards'></select>
                    <option value='First'>First</option>
                    <option value='Second'>Second</option>
                    <option value='Third'>Third</option>
                <button className={styles.save}>Save</button>
            </div>

            <div className={styles}>
                {/* <input type='text'>{imgURL}</input>
                <input type='text'>{title}</input>
                <input type='text'>{description}</input>
                <input type='text'>{link}</input> */}
            </div>
        </div>
    )
}