// Imports
import styles from './ShowPin.module.css';
import EditPin from '../../components/EditPin/EditPin';
import DeletePin from '../../components/DeletePin/DeletePin';
import Header from '../../components/Header';

// Material UI Imports
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function ShowPin({ picture, title, description, link, id }) {

    return (
        <div className={styles.wrapper}>
            <Header />
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
                <img src={`${picture}`} alt={`${title}`} />
                <h2>{`Title: ${title}`}</h2>
                <p>{`Description: ${description}`}</p>
                <p>{`Link: ${link}`}</p>
                <EditPin id={id} />
                <DeletePin id={id} />
            </div>
        </div>
    )
}