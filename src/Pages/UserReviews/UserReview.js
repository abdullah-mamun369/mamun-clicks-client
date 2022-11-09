import React, { useEffect, useState } from 'react';
import('./UserReview.css')

const UserReview = ({ review, handleReviewUpdate }) => {

    const { reviewMessage, customer, serviceName } = review;

    return (
        <div>
            <h1>Service Name: {serviceName}</h1>
            <h3>Customer Name: {customer}</h3>
            <p>Your Review: {reviewMessage}</p>
        </div>
    );
};

export default UserReview;