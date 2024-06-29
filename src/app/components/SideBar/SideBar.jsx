import styles from './sidebar.module.css'
import Image from 'next/image'
import SideBarClose from './SideBarLinks/SideBarClose/SideBarClose';

import SideBarLinks from './SideBarLinks/SideBarLinks';

// agregar funcionalidades de aside y close btn
export default function SideBar () {
    return (
        <aside className={styles.aside}>
            <div className={styles.toggle}>
                <div className={styles.logo}>
                    
                    <Image src="/logo.png" width={400} height={400} />
                    
                </div>
                

            <SideBarClose />               
                
                
            </div>

            <SideBarLinks />
                
   
            


        </aside>
    )
}