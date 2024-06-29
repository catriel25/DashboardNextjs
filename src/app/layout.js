import "./globals.css";
import SideBar from './components/SideBar/SideBar'
import styles from './layout.module.css'
import RightSection from "./components/RightSection/RightSection";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <SideBar/>
          
          {children}

          <RightSection />
        
        </div>
      </body>
    </html>
  );
}
