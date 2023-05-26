import React from 'react';

import Chef from '../Home/Chef/Chef';
import NavBar from '../Shared/NavBar/NavBar';
import { useNavigation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import Slider from '../Home/Slider/Slider';
import Footer from '../Shared/NavBar/Footer/Footer';
import HotItem from '../Shared/HotItem/HotItem';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div >
            <NavBar></NavBar>
            <Slider></Slider>
            {navigation.state ===

                'loading'

                &&

                <div className="text-center">
                    <Spinner
                        color="failure"
                        aria-label="Failure spinner example"
                    />
                </div>

            }

            <div className='md:mx-56'>

                <Chef>{navigation.state ===

                    'loading'

                    &&

                    <div className="text-center">
                        <Spinner aria-label="Default status example" />
                    </div>

                }</Chef>
            </div>
            <HotItem></HotItem>
            <div className='text-center mt-32 mb-32'>
                <h1 className='font-extrabold text-4xl mb-7'>What They Say</h1>
                <div className='px-5 text-center md:flex justify-center md:px-32 md:mx-32 gap-5'>
                    <div>
                        <h1 className='text-2xl font-bold mb-5'>Amanda Seinfield</h1>
                        <p>“Kallyas Pizza has great pizza. Not only do you get served with a great attitude and delivered delicious pizza, you get a great price. I buy lunch slices in Port Angeles frequently when I’m there, and the price never fails to make me smile.”</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-5'>Amanda Seinfield</h1>
                        <p>“Kallyas Pizza has great pizza. Not only do you get served with a great attitude and delivered delicious pizza, you get a great price. I buy lunch slices in Port Angeles frequently when I’m there, and the price never fails to make me smile.”</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-5'>Amanda Seinfield</h1>
                        <p>“Kallyas Pizza has great pizza. Not only do you get served with a great attitude and delivered delicious pizza, you get a great price. I buy lunch slices in Port Angeles frequently when I’m there, and the price never fails to make me smile.”</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;