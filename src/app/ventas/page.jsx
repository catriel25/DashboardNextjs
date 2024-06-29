import styles from './page.module.css';
import SalesForms from './components/SalesForms/SalesForms';

export default function Ventas () {
    return (
        <main>
            <h1>Ventas</h1>
            <div className={styles.container}>

            <SalesForms />

            </div>
        </main>
    )
}