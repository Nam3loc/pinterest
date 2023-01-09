// Imports
import styles from './ShowPin.module.css';
import EditPin from '../../components/EditPin/EditPin';
import DeletePin from '../../components/DeletePin/DeletePin';
import Header from '../../components/Header';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PinContext } from '../../PinContext';

// Material UI Imports
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function ShowPin({ picture, title, description, link, id }) {
    const { pin, setPin } = useContext(PinContext);

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.wrapper}>
                <Header />
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
                    <div className={styles.pinInput}>
                        <img src={`${picture}`} alt={`${title}`} />
                    </div>

                    <div className={styles.descriptionWrapper}>
                        <h2>{`Title: ${title}`}</h2>
                        <p>{`Description: ${description}`}</p>
                        <p>{`Link: ${link}`}</p>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Link to='/pins/edit/:id'>
                        <button>Edit Pin</button>
                    </Link>
                    <DeletePin id={id} />
                </div>
            </div>
        </div>
    )
}