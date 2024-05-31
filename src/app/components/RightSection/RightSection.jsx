import styles from './rightSection.module.css';
import RightNavBar from './RightNavBar/RightNavbar';
import UserProfile from './UserProfile/UserProfile';


export default function RightSection () {
    return (

        <div class={styles.rightSection}>
            <RightNavBar />
            <UserProfile />
        </div>
    )
}