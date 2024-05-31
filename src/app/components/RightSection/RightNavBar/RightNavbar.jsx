'use client'
import { useRef, useEffect, useState } from "react";
import Image from "next/image"
import styles from './rightNavBar.module.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';

export default function RightNavBar () {

        const [darkModeDetect, setDarkModeDetect] = useState(true)

        



        const handleMenuClick = () => {
            // Implementa la lógica para manejar el clic en el menú
        };
    
        const activateDarkMode = () => {
            document.body.classList.add('dark-mode-variables');
            setDarkModeDetect(false)
        };
        const activateLightMode = () => {
            document.body.classList.remove('dark-mode-variables');
            setDarkModeDetect(true)
        }

    return (

    <div className={styles.nav}>
        <button id="menu-btn">
            <span>
                <MenuSharpIcon />
            </span>
        </button>
        <div className={styles.darkMode}>
            <span onClick={activateLightMode} className={ darkModeDetect ? styles.active : ''}>
                <LightModeSharpIcon />
            </span>
            <span onClick={activateDarkMode} className={darkModeDetect ? '' : styles.active }>
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