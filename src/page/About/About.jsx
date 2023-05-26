import React from 'react';
import Footer from '../../Shared/NavBar/Footer/Footer';
import HotItem from '../../Shared/HotItem/HotItem';

const About = () => {
    return (
        <div>
            <main className="max-w-6xl mx-auto my-8 px-6 md:px-10 mt-32 mb-32">
                <h1 className="text-3xl font-bold mb-4 text-center">About Our Restaurant</h1>
                <p className="mb-4">Our restaurant has been serving delicious food to customers since 2010. We take pride in using fresh, locally-sourced ingredients to create our dishes.</p>
                <p className="mb-4">Our menu features a wide range of options, from classic comfort food to innovative, modern cuisine. Whether you're in the mood for a juicy burger or a flavorful vegan dish, we have something for everyone.</p>
                <p className="mb-4">We also offer catering services for events of all sizes. Our experienced chefs can create a custom menu tailored to your specific needs and preferences.</p>
                <p className="mb-4">At our restaurant, we believe that food is more than just sustenance—it's a way to bring people together and create lasting memories. That's why we strive to provide not only delicious meals, but also a welcoming atmosphere and friendly service.</p>
                <p className="mb-4">Thank you for considering our restaurant for your next dining experience. We look forward to serving you!</p>
            </main>
            <HotItem></HotItem>
            <div className='mb-24'>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;