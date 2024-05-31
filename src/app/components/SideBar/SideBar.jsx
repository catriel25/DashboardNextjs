import styles from './sidebar.module.css'
import Image from 'next/image'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SideBarLinks from './SideBarLinks/SideBarLinks';

// agregar funcionalidades de aside y close btn
export default function SideBar () {
    return (
        <aside>
            <div className={styles.toggle}>
                <div className={styles.logo}>
                    
                    <Image src="/logo.png" width={400} height={400} />
                    
                    
                </div>
                <div className={styles.close}  id='close-btn'>
                    <span>
                        <CloseSharpIcon />
                    </span>

                </div>
                
                
                
            </div>

            <SideBarLinks />
                
   
            


        </aside>
    )
}