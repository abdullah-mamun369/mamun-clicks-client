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


    // const handleReviewUpdate = e => {
    //     e.preventDefault();
    //     // console.log(user);
    //     fetch(`http://localhost:5000/reviews/${id}}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 alert('User Updated');
    //             }
    //             console.log(data);
    //         })
    // }

    const handleReviewUpdate = (id, message) => {
        console.log(id, message);
        const proceed = window.confirm('Are you sure, you want to change this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(message)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.modifiedCount);
                    if (data.modifiedCount > 0) {
                        alert('review Updated');
                    }
                    console.log(data);
                })
        }
    }


    // const handleReviewUpdate = id => {
    //     fetch(`http://localhost:5000/reviews/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 const remaining = reviews.filter(odr => odr._id !== id);
    //                 const approving = reviews.find(odr => odr._id === id);
    //                 approving.status = 'Approved'

    //                 const newOrders = [approving, ...remaining];
    //                 setReviews(newOrders);
    //             }
    //         })
    // }


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {
                reviews.map(review => <UserReview
                    key={review._id}
                    review={review}
                    handleReviewUpdate={handleReviewUpdate}
                    handleDelete={handleDelete}

                ></UserReview>)
            }
        </div>
    );
};

export default MyReviews;