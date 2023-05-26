import React, { useRef } from 'react';
import Footer from '../../Shared/NavBar/Footer/Footer';
import ReactToPrint from 'react-to-print';



const Blog = () => {
    const ref = useRef()
    return (
        <div>
            <ReactToPrint trigger={() =>
            <div className='flex justify-end px-5 md:px-10 md:mx-10 mb-5 mt-5'>
            <button className='bg-orange-400 px-5 rounded  font-bold text-white'>Print</button> 
            </div>
            } content={()=>ref.current}/>

            
            
            <div ref={ref} className='mb-10'>
                <div className='bg-[#F9F8FF] text-center mb-5'>
                    <h1 className='font-bold text-2xl py-32 text-orange-400'>Blog</h1>
                </div>
                <div className='px-10'>
                    <div className='border text-center bg-[#F9F8FF] p-5'>
                        <h1 className='mb-2 font-semibold text-orange-400'>Tell us the differences between uncontrolled and controlled components.</h1>
                        <p>Controlled components are managed by the parent component, <br /> while uncontrolled components manage their own state. Controlled components require callbacks to be passed in as props to handle changes to the value, while uncontrolled components don't require any callbacks.</p>
                    </div>
                </div>
                <div className='px-10 mt-5'>
                    <div className='border text-center bg-[#F9F8FF] p-5'>
                        <h1 className='mb-2 font-semibold text-orange-400'>How to validate React props using PropTypes?</h1>
                        <p>React provides a built-in library called PropTypes for validating the props passed to a component. <br /> PropTypes allow to specify the type and shape of the props that a component expects, and throws an error if the props passed to the component don't match the specified type and shape.
                        </p>
                    </div>
                </div>
                <div className='px-10 mt-5'>
                    <div className='border text-center bg-[#F9F8FF] p-5'>
                        <h1 className='mb-2 font-semibold text-orange-400'>Tell us the difference between nodejs and express js.</h1>
                        <p>Node.js is a server-side runtime environment that allows to run JavaScript on the server. <br />
                        On the other hand, Express.js is a web application framework for Node.js. It provides a set of features and tools for building web applications and APIs quickly and easily.  
                        </p>
                    </div>
                </div>
                <div className='px-10 mt-5'>
                    <div className='border text-center bg-[#F9F8FF] p-5'>
                        <h1 className='mb-2 font-semibold text-orange-400'>What is a custom hook, and why will you create a custom hook</h1>
                        <p>Custom hooks are created by defining a function that uses React's built-in hooks such as useState, useEffect, useContext, and more. <br /> The function can then be called in any component, allowing you to reuse the logic without having to repeat it in each component.
                        </p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;