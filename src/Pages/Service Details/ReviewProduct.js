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
        <div>

            <h2>{customer}</h2>
            <h2>{reviewMessage}</h2>

        </div>
    );
};

export default ReviewProduct;