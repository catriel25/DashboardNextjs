import styles from "./page.module.css";
import Analytics from './components/Analytics/Analytics'
import NewUsers from "./components/NewUsers/NewUsers";
import RecentOrders from "./components/RecentOrders/RecentOrders";

export default function Home() {
  return (
    <main>
        <Analytics />
        <NewUsers />
        <RecentOrders />
        

    </main>
    
  );
}
