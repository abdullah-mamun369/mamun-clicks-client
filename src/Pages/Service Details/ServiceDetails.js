import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { image, name, description, id } = useLoaderData();

    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ServiceDetails;