import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const ReviewProduct = ({ review }) => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    const { _id, reviewMessage, customer, service } = review;

    // useEffect(() => {
    //     fetch(`http://localhost:5000/purchase?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [user?.email])

    return (
        <div className='container m-auto'>
            <div className="card w-96 bg-base-100 shadow-xl border">
                <div className="card-body">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </label>
                    <h2 className="card-title">{customer}</h2>
                    <p>{reviewMessage}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewProduct;