import { Card, Dropdown } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ data }) => {
    //console.log(data)
    const { _id, name, exp, num_rec, like, chef_picture } = data
    return (
        <div className=''>
            


            <div className="max-w-sm">
                <Card className=''>
                    <div className="flex justify-end px-4 pt-4">

                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <LazyLoad threshold={0.95}>
                            <img
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                src={chef_picture}
                                alt="Bonnie image"
                            />
                        </LazyLoad>
                        <h5 className="mb-1 text-xl font-medium font-mono dark:text-white text-orange-400">
                            {name}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Years of experience <br /> <center>{exp}</center>
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Numbers of recipes <br /> <center>{num_rec}</center>
                        </span>
                        <span className="items-center gap-2 flex text-sm text-gray-500 dark:text-gray-400">
                            <FaHeart className='text-red-700'></FaHeart> {like}
                        </span>

                        <div className="mt-4 flex space-x-3 lg:mt-6">

                            <Link
                                to={`/chef/${_id}`}
                                className="inline-flex items-center rounded-lg border border-orange-400 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            >
                                View Recipes
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
            {/* <div className=''>
                <img className='w-64' src={chef_picture} alt="" />
            </div>
            <Link to={`/chef/${_id}`}>GOO</Link> */}
        </div>
    );
};

export default ChefCard;