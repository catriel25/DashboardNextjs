'use client'

import styles from './sideBarClose.module.css';
import { useState, useEffect } from 'react';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export default function SideBarClose () {
    const [sideMenu, setSideMenu] = useState(null);

    useEffect (() => {
        setSideMenu(document.querySelector('aside'))
    }, []);
    

    const handleMenuClick = () => {
        
        sideMenu.classList.remove('showMenu');
    }
    

    return(
        <div className={styles.close}  id='close-btn' onClick={handleMenuClick}>
            <span>
                <CloseSharpIcon />
            </span>

        </div>
    )
}