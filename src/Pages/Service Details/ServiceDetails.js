import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { image, name, description, _id } = useLoaderData();

    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <Link className="card-actions" to={`/purchase/${_id}`}>
                    <button className="btn btn-primary w-full">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;