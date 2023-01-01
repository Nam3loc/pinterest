// Imports
import styles from './ShowPin.module.css';

// Material UI Imports
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function ShowPin() {
    const {picture, title, description, link} = this.props.pin;

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
                <img>src={`${picture}`} alt={`${title}`}</img>
                <h2>{`Title: ${title}`}</h2>
                <p>{`Description: ${description}`}</p>
                <p>{`Link: ${link}`}</p>
            </div>
        </div>
    )
}