import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import UserReview from './UserReview';
import('./MyReviews.css')

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    // review================================================
    useEffect(() => {
        fetch(`https://assignment-11-server-beta.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])



    const handleReviewUpdate = (id, message) => {
        console.log(id, message);
        const proceed = window.confirm('Are you sure, you want to change this review');
        if (proceed) {
            fetch(`https://assignment-11-server-beta.vercel.app/reviews/${id}`, {
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
                        window.location.reload(true);
                    }
                    console.log(data);
                })
        }
    }



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://assignment-11-server-beta.vercel.app/reviews/${id}`, {
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
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 container m-auto'>

            <div className='lg:col-span-4'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 my-10'>
                    {
                        reviews.map(review => <UserReview
                            key={review._id}
                            review={review}
                            handleReviewUpdate={handleReviewUpdate}
                            handleDelete={handleDelete}

                        ></UserReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;