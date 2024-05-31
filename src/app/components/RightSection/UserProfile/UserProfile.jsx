import styles from './userProfile.module.css';
import Image from 'next/image';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';

export default function UserProfile () {
    return(
        <>
        <div className={styles.userProfile}>
            <div className={styles.logo}>
                <Image src="/logo.png" width={200} height={200}/>
                <h2>Usuario</h2>
                <p>Detalle de usuario</p>
            </div>
        </div>
        <div className={styles.reminders}>
            <div className={styles.header}>
                <h2>Reminders</h2>
                <span>
                    <NotificationsNoneSharpIcon />
                </span>
            </div>
            <div className={styles.notification}>
                <div className={styles.icon}>
                    <span>
                        <VolumeUpSharpIcon />
                    </span>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>Workshop</h3>
                        <small className={styles.textMuted}>
                            08:00 AM - 12:00 PM
                        </small>
                    </div>
                    <span>
                        <MoreVertSharpIcon />
                    </span>
                </div>
            </div>

            <div className={`${styles.notification} ${styles.deactive}`}>
                <div className={styles.icon}>
                    <span>
                        <EditSharpIcon />
                    </span>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>Workshop</h3>
                        <small className={styles.textMuted}>
                            08:00 AM - 12:00 PM
                        </small>
                    </div>
                    <span>
                        <MoreVertSharpIcon />
                    </span>
                </div>
            </div>

            <div className={`${styles.notification} ${styles.addReminder}`}>
                <div>
                    <span>
                        <AddSharpIcon />
                    </span>
                    <h3>Add Reminder</h3>
                </div>
                
            </div>

        </div>
    
    
        </>
    )
}