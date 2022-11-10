import React, { useState } from 'react';
import './AddService.css'

const AddService = () => {

    const [service, setService] = useState({})

    const handleAddService = e => {
        e.preventDefault();

        fetch('https://assignment-11-server-beta.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully')
                    e.target.reset();
                }
            })

        console.log(service);
    }

    const handleInputBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newService = { ...service };
        newService[field] = value;
        setService(newService);
    }


    return (
        <div className='mb-36'>
            <form onSubmit={handleAddService}>
                <h2 className="text-3xl font-bold text-primary text-center mb-5 mt-20">Plaese add your service </h2>
                <div className='container m-auto'>
                    <input onChange={handleInputBlur} name="image" type="text" placeholder="Please Place your image url" className="input input-ghost w-full  input-bordered mb-5" />
                    <input onChange={handleInputBlur} name="name" type="text" placeholder="Please add your service name" className="input input-ghost w-full  input-bordered mb-5" />
                    <textarea onChange={handleInputBlur} name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Please type your service description mb-5" required></textarea>
                    <input onChange={handleInputBlur} name="price" type="number" placeholder="Please place your price" className="input input-ghost w-full  input-bordered mb-5" required />


                    <input className='btn btn-primary' type="submit" value="PUT YOUR SERVICE" />
                </div>


            </form>
        </div>
    );
};

export default AddService;