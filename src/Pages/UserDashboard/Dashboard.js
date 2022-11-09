import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Dashboard.css'
import UserDashboard from './UserDashboard';


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/purchase?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])




    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/purchase/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h2 className="text-5xl">You have {orders.length} Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <UserDashboard
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                            ></UserDashboard>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Dashboard;