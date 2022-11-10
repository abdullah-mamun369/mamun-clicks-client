import React, { useState } from 'react';

import('./UserReview.css')

const UserReview = ({ review, handleReviewUpdate, handleDelete }) => {

    const { _id, reviewMessage, customer, serviceName } = review;
    const [updatedReview, setUpdatedReview] = useState();


    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...review };
        newUser[field] = value;
        console.log(newUser);
        setUpdatedReview(newUser);
    }



    return (
        <div className='mb-5  border p-5 rounded-2xl shadow-lg'>
            <h1 className='mb-3'><span className='font-bold mr-2 text-primary'>Service Name:</span>  {serviceName}</h1>
            <h3 className='mb-3'><span className='font-bold mr-2 text-primary'>Customer Name:</span> {customer}</h3>
            <p className='mb-3'><span className='font-bold mr-2 text-primary'>Your Review:</span> {reviewMessage}</p>

            <label>
                {/* <button onClick={() => handleReviewUpdate(_id)} className='btn'>Update Review</button> */}
                <div>
                    {/* The button to open modal */}
                    <textarea onChange={handleInputChange} type='text' name="reviewMessage" className="my-4 textarea textarea-bordered h-24 w-full" placeholder="Change your review" required></textarea>
                    {/* Put this part before </body> tag */}

                </div>
            </label>
            <label onClick={() => { handleReviewUpdate(_id, updatedReview) }} htmlFor="my-modal-3" className="btn btn-outline btn-primary mr-3">UPDATE REVIEW</label>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-primary'>DELETE REVIEW</button>
            </label>

        </div>
    );
};

export default UserReview;