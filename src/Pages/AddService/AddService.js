import React, { useState } from 'react';
import './AddService.css'

const AddService = () => {

    const [service, setService] = useState({})

    const handleAddService = e => {
        e.preventDefault();

        fetch('http://localhost:5000/services', {
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
        <div>
            <form onSubmit={handleAddService}>
                <h2 className="text-4xl">Plaese add your service </h2>

                <input onChange={handleInputBlur} name="image" type="text" placeholder="Please Place your image url" className="input input-ghost w-full  input-bordered" />
                <input onChange={handleInputBlur} name="name" type="text" placeholder="Please add your service name" className="input input-ghost w-full  input-bordered" />
                <textarea onChange={handleInputBlur} name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Please type your service description" required></textarea>
                <input onChange={handleInputBlur} name="price" type="number" placeholder="Please place your price" className="input input-ghost w-full  input-bordered" required />


                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default AddService;