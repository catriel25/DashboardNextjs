import styles from './newUsers.module.css'
import Image from 'next/image'

export default function NewUsers () {
    return(
        <>
        <div class={styles.newUsers}>
                <h2>New Users</h2>
                <div className={styles.userList}>
                    <div className={styles.user}>
                        <Image src="/profile-2.jpg" width={50} height={50}/>
                        <h2>Jack</h2>
                        <p>54 Min Ago</p>
                    </div>
                    <div className={styles.user}>
                        <Image src="/profile-3.jpg" width={50} height={50}/>
                        <h2>Amir</h2>
                        <p>3 Hours Ago</p>
                    </div>
                    <div className={styles.user}>
                        <Image src="/profile-4.jpg" width={50} height={50}/>
                        <h2>Ember</h2>
                        <p>6 Hours Ago</p>
                    </div>
                    <div className={styles.user}>
                        <Image src="/plus.png" width={50} height={50}/>
                        <h2>More</h2>
                        <p>New User</p>
                    </div>
                </div>
            </div>
        </>
    )
}