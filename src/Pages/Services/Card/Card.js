import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({ service }) => {

    const { _id, image, name, description, price } = service;

    return (
        <div className='col-span-1'>

            <div className="card card-compact w-full bg-base-100 shadow-xl mt-5">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='w-full' src={image} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
                {/* <figure ><img className='w-full' src={image} alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="text-base font-bold">{name}</h2>
                    <p>Details: <span className=''>{description.substring(0, 100)}...</span></p>
                    <p>Price: <span className='font-bold'>${price}</span></p>
                    <div>
                        <Link className="card-actions" to={`/service/${_id}`}>
                            <button className="btn btn-outline btn-primary w-full">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;