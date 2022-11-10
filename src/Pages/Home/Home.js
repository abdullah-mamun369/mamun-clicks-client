import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Services/Card/Card';
import './Home.css';

const Home = () => {
    const services = useLoaderData();

    return (

        <div className='website-container'>
            {/* // Slider start */}
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

            {/* // Service Cart Start */}
            <div className='container m-auto'>
                <div className='my-20'>
                    <h1 className='text-3xl font-bold text-primary text-center my-5'>These are Regular Course</h1>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 sidebar-container'>
                        <div className='lg:col-span-4'>
                            <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                                {
                                    services.map(service => <Card key={service._id} service={service}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* 1st-section */}
                <div className='my-20'>
                    <h1 className='text-4xl font-bold text-primary text-center my-5'>About US</h1>
                    <div className="hero  bg-base-200 mb-5 rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Box Office News!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Your Added Review */}
                <div className='my-20'>
                    <h1 className='text-4xl font-bold text-primary text-center my-5'>These are Your Added Course</h1>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 sidebar-container'>
                        <div className='lg:col-span-4'>
                            <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                                {
                                    services.map(service => <Card key={service._id} service={service}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our clients */}
                <div className='my-20'>
                    <h1 className='text-4xl font-bold text-primary text-center my-5'>Our Clients</h1>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 sidebar-container'>
                        <div className='lg:col-span-4'>
                            <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                                {
                                    services.map(service => <Card key={service._id} service={service}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;