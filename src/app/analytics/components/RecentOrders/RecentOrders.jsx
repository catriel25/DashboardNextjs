'use client'
import styles from './recentOrders.module.css'
import { useState, useEffect } from 'react';

export default function RecentOrders () {
    // Define el estado para almacenar los pedidos
    const [orders, setOrders] = useState([]);

    // Simula la carga de datos
    useEffect(() => {
        // Aquí deberías reemplazar este array con una llamada a una API para obtener los pedidos reales
        const Orders = [
            {
                productName: 'JavaScript Tutorial',
                productNumber: '85743',
                paymentStatus: 'Due',
                status: 'Pending'
            },
            {
                productName: 'CSS Full Course',
                productNumber: '97245',
                paymentStatus: 'Refunded',
                status: 'Declined'
            },
            {
                productName: 'Flex-Box Tutorial',
                productNumber: '36452',
                paymentStatus: 'Paid',
                status: 'Active'
            },
        ]
        setOrders(Orders);
    }, []);

    return (
        <div class={styles.recentOrders}>
                <h2>Recent Orders</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.productName}</td>
                                <td>{order.productNumber}</td>
                                <td>{order.paymentStatus}</td>
                                <td className={order.status === 'Declined' ? styles.danger : order.status === 'Pending' ? styles.warning : styles.primary}>
                                    {order.status}
                                </td>
                                <td className={styles.primary}>Details</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
    )
}