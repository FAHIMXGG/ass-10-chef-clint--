import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import './Slider.css'
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='mb-10 '>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1102623982911504454/190130-korean-fried-chicken-horizontal-041-1549304734.png')] bg-cover dark:bg-gray-700 dark:text-white ">
                        <div className=' bg-orange-400/30 backdrop-brightness-75 w-full h-full flex  justify-center items-center flex-col'>
                            <h1 className='text-white text-2xl md:text-4xl font-bold  st '>Korean Fried Chicken</h1> <br />
                            <center><Link to="/chef/0282e0e58a5c404fbd15261f11c2ab6a"><Button className='bg-orange-400 border-white border-2 hover:bg-orange-900'>Explore!</Button></Link></center>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1102628606573822064/Crispy-Korean-Fried-Chicken-Wings-4.jpg')] bg-cover dark:bg-gray-700 dark:text-white ">
                        <div className='bg-orange-400/30 backdrop-brightness-75 w-full h-full flex  justify-center items-center flex-col'>
                            <h1 className='text-white text-2xl md:text-4xl font-bold  st'>Korean Fried Chicken Wings</h1> <br />
                            <center><Link to="/chef/0282e0e58a5c404fbd15261f11c2ab55"><Button className='bg-orange-400 border-white border-2 hover:bg-orange-900'>Explore!</Button></Link></center>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-[url('https://cdn.discordapp.com/attachments/1094651413235253289/1102628812405100654/maxresdefault.jpg')] bg-cover dark:bg-gray-700 dark:text-white">
                        <div className='bg-orange-400/30 backdrop-brightness-75 w-full h-full flex  justify-center items-center flex-col'>
                            <h1 className='text-white text-2xl md:text-4xl font-bold  st'>Korean Beef Bulgogi</h1> <br />
                            <center><Link to="/chef/0282e0e58a5c404fbd15261f11c2ab33"><Button className='bg-orange-400 border-white border-2 hover:bg-orange-900'>Explore!</Button></Link></center>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;