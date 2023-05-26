import { Button } from 'flowbite-react';
import React from 'react';
import { FaHeart } from 'react-icons/fa';


const Recipe = ({rec, handleNotify, disabled}) => {
    

    const {rec_id, recipe_name, ingredients, cooking_method, rating, img} = rec
    return (
        <div className='md:flex mb-5 bg-orange-400 md:px-12 gap-6 items-center p-5 md:p-0'>
            <div className='mb-10 mt-10 basis-1/4 flex items-center justify-center'>
                <img className='md:w-96 rounded ' src={img} alt="" />
            </div>
            <div className='basis-2/4'>
                <div className=''>
                    <p className='font-bold'><span >Dish</span>: {recipe_name}</p>
                    <p className='font-semibold'><span>Ingredients</span> <br />{ingredients}</p>
                    <p><span className='font-bold'>Cooking method:</span> <br />{cooking_method}</p>
                </div>
            </div>
            <div className='basis-1/4 flex items-center justify-center flex-col'>
                <p className='mb-2'>Ratting: {rating}</p>
                <div>
                <Button disabled={disabled} onClick={() => handleNotify()} className='bg-orange-950'> <span className="font-bold items-center gap-2 flex text-sm text-gray-500 dark:text-gray-400">
                        <FaHeart className='text-red-700'> </FaHeart> 
                    </span> Favorite </Button>
                </div>
            </div>
            
        </div>
    );
};

export default Recipe;