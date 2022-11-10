import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Card from '../Services/Card/Card';
import './Home.css';
import client1 from '../../assets/images/1.png'
import client2 from '../../assets/images/2.png'
import client3 from '../../assets/images/3.png'
import client4 from '../../assets/images/4.png'
import slider1 from '../../assets/images/a.jpg'
import slider2 from '../../assets/images/b.jpg'
import slider3 from '../../assets/images/c.jpg'
import slider4 from '../../assets/images/d.jpg'



const Home = () => {
    const user = useContext(AuthContext);
    const services = useLoaderData();
    const regServices = services.slice(0, 3);
    const cusServices = services.slice(6, 50)

    return (

        <div className='website-container'>
            {/* // Slider start */}
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-screen ">
                    <img src={slider1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full slider-image">
                    <img src={slider2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full slider-image">
                    <img src={slider3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full slider-image">
                    <img src={slider4} className="w-full" />
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
                                    regServices.map(service => <Card key={service._id} service={service}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                    <Link className='' to='/services'>
                        <button className="btn btn-active btn-primary container m-auto">See All</button>

                    </Link>
                </div>

                {/* About-section */}
                <div className='my-20'>
                    <h1 className='text-4xl font-bold text-primary text-center my-5'>About US</h1>
                    <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 border">
                        <figure className='h-auto'><img src="https://images.pexels.com/photos/7709685/pexels-photo-7709685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">We Do Best!</h2>
                            <p>We specialize in wedding photography, corporate, family and senior portraits, often traveling to your destination to capture the perfect moment in the perfect place. From the shores here in Lake Geneva to the beaches of Lake Michigan in Milwaukee and Chicago and beyond. We will be there with you every step of the way to guarantee your special moments are captured for all time. <br /><br />

                                To us photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments. <br /> <br />
                                From the shores here in Lake Geneva to the beaches of Lake Michigan in Milwaukee and Chicago and beyond. We will be there with you every step of the way to guarantee your special moments are captured for all time.
                            </p>
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
                                    cusServices.map(service => <Card key={service._id} service={service}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our clients */}
                <div className='container m-auto'>
                    <h1 className='text-4xl font-bold text-primary text-center my-5 mb-10'>Our Clients</h1>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-3 gap-4 mb-10'>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-6 gap-1 mb-10'><img src={client1} alt="" /></div>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-6 gap-1 mb-10'><img src={client2} alt="" /></div>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-6 gap-1 mb-10'><img src={client3} alt="" /></div>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-6 gap-1 mb-10'><img src={client4} alt="" /></div>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default Home;