import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewProduct from './ReviewProduct';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { name, description, _id } = useLoaderData();

    // modal-function
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    const handlePostReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const reviewMessage = form.reviewMessage.value;

        const review = {
            service: _id,
            serviceName: name,
            customer: userName,
            email,
            reviewMessage
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('You have Purchased successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <Link className="card-actions" to={`/purchase/${_id}`}>
                    <button className="btn btn-primary w-full">Details</button>
                </Link>
            </div>

            {/* Review start */}
            <div>
                <div>
                    <h2>
                        {
                            reviews.map(review => <ReviewProduct
                                key={review._id}
                                review={review}
                            // handleDelete={handleDelete}
                            // handleStatusUpdate={handleStatusUpdate}
                            ></ReviewProduct>)
                        }
                    </h2>
                </div>

                <div>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-3" className="btn">Post Your Review</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div>
                                <form onSubmit={handlePostReview}>
                                    <h2 className="text-2xl font-bold mb-3">Service Name: {name}</h2>

                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                                        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />

                                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                    </div>
                                    <textarea name="reviewMessage" className="my-4 textarea textarea-bordered h-24 w-full" placeholder="Write your review" required></textarea>

                                    <input className='btn' type="submit" value="Submit Review" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ServiceDetails;