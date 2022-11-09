import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import UserReview from './UserReview';
import('./MyReviews.css')

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    // review================================================
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleReviewUpdate = id => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id);
                    const approving = reviews.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setReviews(newOrders);
                }
            })
    }

    return (
        <div>
            <tbody>


                {
                    reviews.map(review => <UserReview
                        key={review._id}
                        review={review}
                        handleReviewUpdate={handleReviewUpdate}
                    ></UserReview>)
                }


            </tbody>
        </div>
    );
};

export default MyReviews;