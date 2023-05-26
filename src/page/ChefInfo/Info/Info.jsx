import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe/Recipe';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'flowbite-react';

import 'react-toastify/dist/ReactToastify.css';



const Info = () => {
    // const {id} = useParams()
    // console.log(id)
    const [disabled, setDisabled] = useState(false);
    const handleNotify = () => {
        notify()
        onClick()
        
        
    }
    const notify = () =>{
        toast("Favorite ♡")
    }
    const onClick = () => {
        setDisabled(true);
      };
    

    const chef = useLoaderData()
    console.log(chef)
    const { _id, name, exp, num_rec, like, recipe_info, chef_picture, bio } = chef
    return (
        <div>
            
            <div className='bg-orange-300  flex flex-col items-center p-5 md:p-0'>
                <img className='w-52 mt-20 rounded' src={chef_picture} alt="" />
                <h1 className='mt-5 font-bold text-2xl text-orange-500 st'>{name}</h1>
                <div className='md:px-52 md:mx-96 text-center mt-5'><p><span className='font-bold'>Bio:</span> <br /> {bio}</p></div >
                <div className='mb-5 mt-5'>
                    <p className='font-bold'><span className='text-orange-700'>Number of recipes:</span> {num_rec}</p>
                    <p className='font-bold'><span className='text-orange-700'>Years of experience:</span> {exp}</p>
                </div>
                <div className='mb-20'>
                    <span className="font-bold items-center gap-2 flex text-sm text-gray-500 dark:text-gray-400">
                        <FaHeart className='text-red-700'></FaHeart> {like}
                    </span>
                </div>
            </div>
            <div className='bg-orange-300'>
                {
                    recipe_info.map(rec => <Recipe
                        key={rec.rec_id}
                        rec={rec}
                        handleNotify= {handleNotify}
                        disabled ={disabled}

                    >

                    </Recipe>)
                }
            </div>
            <ToastContainer />
            
        </div>
    );
};

export default Info;