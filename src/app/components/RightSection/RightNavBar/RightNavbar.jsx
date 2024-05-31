'use client'
import { useRef, useEffect } from "react";

import Image from "next/image"
import styles from './rightNavBar.module.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';

export default function RightNavBar () {
    const menuBtnRef = useRef(null);
    const darkModeRef = useRef(null);

    useEffect(() => {
        const handleMenuClick = () => {
          sideMenuRef.current.style.display = 'block';
        };
    
        const handleCloseClick = () => {
          sideMenuRef.current.style.display = 'none';
        };
    
        const handleDarkModeClick = () => {
          document.body.classList.toggle('dark-mode-variables');
          darkModeRef.current.querySelector('span:nth-child(1)').classList.toggle('active');
          darkModeRef.current.querySelector('span:nth-child(2)').classList.toggle('active');
        };
    
        const menuBtn = menuBtnRef.current;
        const darkMode = darkModeRef.current;
    
        menuBtn.addEventListener('click', handleMenuClick);
        darkMode.addEventListener('click', handleDarkModeClick);
    
        // Cleanup event listeners on unmount
        return () => {
          menuBtn.removeEventListener('click', handleMenuClick);
          darkMode.removeEventListener('click', handleDarkModeClick);
        };
      }, []);

    return (

    <div className={styles.nav}>
        <button id="menu-btn" ref={menuBtnRef}>
            <span>
                <MenuSharpIcon />
            </span>
        </button>
        <div className={styles.darkMode} ref={darkModeRef}>
            <span >
                <LightModeSharpIcon />
            </span>
            <span>
                <DarkModeSharpIcon />
            </span>
        </div>

        <div class={styles.profile}>
            <div class={styles.info}>
                <p>Hey, <b>Reza</b></p>
                <small class={styles.textMuted}>Admin</small>
            </div>
            <div className={styles.profilePhoto}>
                <Image src="/profile-1.jpg" width={50} height={50} />
            </div>
        </div>

    </div>

    )
}