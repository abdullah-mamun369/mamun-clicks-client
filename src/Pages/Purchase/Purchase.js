import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Purchase.css'

const Purchase = () => {
    const { _id, name, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlacePurchase = event => {
        event.preventDefault();
        const form = event.target;
        const userName = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const purchase = {
            service: _id,
            serviceName: name,
            price,
            customer: userName,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('https://assignment-11-server-beta.vercel.app/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
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
        <div className='container m-auto'>
            <form onSubmit={handlePlacePurchase}>
                <h2 className="text-4xl font-bold mb-3 my-10">You are Purchasing: {name}</h2>
                <h4 className="text-3xl mb-3 font-semibold">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn btn-primary mt-5 mb-60' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Purchase;