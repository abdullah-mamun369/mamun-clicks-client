import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import('./UserReview.css')

const UserReview = ({ review, handleReviewUpdate, handleDelete }) => {

    const { _id, reviewMessage, customer, serviceName } = review;
    const [updatedReview, setUpdatedReview] = useState();
    // const [updateReview, setUpdateReview] = useState();


    // const handleUpdateReview = e => {
    //     e.preventDefault();

    //     console.log(updateReview._id);
    //     fetch(`http://localhost:5000/reviews/${updateReview._id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateReview)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 alert('Review Updated');
    //             }
    //             console.log(data);
    //         })
    // }

    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...review };
        newUser[field] = value;
        console.log(newUser);
        setUpdatedReview(newUser);
    }



    return (
        <div className='mb-5'>
            <h1>Service Name: {serviceName}</h1>
            <h3>Customer Name: {customer}</h3>
            <p>Your Review: {reviewMessage}</p>

            <label>
                {/* <button onClick={() => handleReviewUpdate(_id)} className='btn'>Update Review</button> */}
                <div>
                    {/* The button to open modal */}
                    <textarea onChange={handleInputChange} type='text' name="reviewMessage" className="my-4 textarea textarea-bordered h-24 w-full" placeholder="Change your review" required></textarea>
                    <label onClick={() => { handleReviewUpdate(_id, updatedReview) }} htmlFor="my-modal-3" className="btn">Update Your Review</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div>
                                <form onSubmit={() => { handleReviewUpdate(_id, updatedReview) }}>
                                    <textarea onChange={handleInputChange} type='text' name="reviewMessage" className="my-4 textarea textarea-bordered h-24 w-full" placeholder="Change your review" required></textarea>

                                    <input className='btn' type="submit" value="Submit Review" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn'>X</button>
            </label>

        </div>
    );
};

export default UserReview;