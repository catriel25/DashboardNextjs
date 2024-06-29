'use client'

import styles from './sidebarlinks.module.css'
import Link from "next/link";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { useState } from 'react';

export default function SideBarLinks() {

    const [activeItem, setActiveItem] = useState(null);

    const items = [
        {
            title: "Dashboard",
            icon: <DashboardSharpIcon />,
            link: "#",
            subItem : []
        },
        {
            title: "Users",
            icon: <PersonOutlineOutlinedIcon />,
            link: "#",
            subItem : []
        },
        {
            title: "Ventas",
            icon: <ReceiptLongOutlinedIcon />,
            link: "ventas",
            subItem : []
        },
        {
            title: "Analytics",
            icon: <InsightsOutlinedIcon />,
            link: "analytics",
            subItem : []
        },
        {
            title: "Tickets",
            icon: <EmailOutlinedIcon />,
            link: "#",
            subItem : []
        },
        {
            title: "Sale List",
            icon: <InventoryOutlinedIcon />,
            link: "#",
            subItem : []
        },
        {
            title: "Reports",
            icon: <ReportOutlinedIcon />,
            link: "#",
            subItem : []
        },
        {
            title: "Settings",
            icon: <SettingsSharpIcon />,
            link: "#",
            subItem : []
        },
        {
            title: "New Login",
            icon: <AddSharpIcon />,
            link: "#",
            subItem : []
        },
        {
            title: "Logout",
            icon: <LogoutSharpIcon />,
            link: "#",
            subItem : []
        }
    ];

    const handleClick = (title) => {
        if (activeItem === title) {
            // Si el mismo elemento ya está activo, desactiva la clase
            setActiveItem(null);
        } else {
            // Si se hace clic en un elemento diferente, establece ese elemento como activo
            setActiveItem(title);
        }
    };

    return(

        <div className={styles.sidebar}>         
            {items.map((item) => (
                
                
                <Link href={`/${item.link}`} key={item.title} className={`${styles.link} ${activeItem === item.title ? styles.active : ''}`}
                onClick={() => handleClick(item.title)}>
                        <span>{item.icon}</span>
                        <h3>{item.title}</h3>
                   
                </Link>
            ))}
        </div>
 
   
    )
}