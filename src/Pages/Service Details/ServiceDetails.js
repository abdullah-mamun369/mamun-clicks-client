import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewProduct from './ReviewProduct';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { image, name, description, _id, price } = useLoaderData();

    // modal-function
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://assignment-11-server-beta.vercel.app/reviews?service=${_id}`)
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



        fetch('https://assignment-11-server-beta.vercel.app/reviews', {
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
            <div>
                <img src={image} alt="" className='mb-20 w-screen h-96' />
                <div className='container m-auto shadow-xl bg-slate-100 py-20 px-40 rounded-2xl mb-20'>
                    <h1 className='text-5xl font-bold text-center text-primary '>{name}</h1>
                    <p className='text-center my-8'>{description}</p>
                    <h3 className='text-2xl font-bold text-center '>Price: ${price}/hr</h3>
                    <Link to={`/purchase/${_id}`}><button className="btn btn-outline btn-primary m-auto grid mt-8">Purchase</button></Link>

                </div>
            </div>


            {/* Review start */}
            <div>
                <div>
                    <h1 className='text-3xl font-bold text-center mb-3'>Reviews of this product</h1>
                    <p className='text-xl font-semibold text-center mb-8'>You have to refreash to see your posted review</p>
                    <div className='lg:col-span-4 container m-auto'>
                        <div className='grid lg:grid-cols-4 sm:grid-cols-3 gap-4 mb-10'>
                            {
                                reviews.map(review => <ReviewProduct
                                    key={review._id}
                                    review={review}
                                ></ReviewProduct>)
                            }
                        </div>
                    </div>


                </div>

                <div className='container m-auto mb-20'>
                    {/* The button to open modal */}
                    {
                        user?.email ? <label htmlFor="my-modal-3" className="btn btn-primary">Post Your Review</label> : <p className='text-2xl font-semibold'>Please LogIn to Post a review.... <Link to='/login' className='text-primary'>Login</Link></p>
                    }


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

                                    <input className='btn btn-primary' type="submit" value="Submit Review" />
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