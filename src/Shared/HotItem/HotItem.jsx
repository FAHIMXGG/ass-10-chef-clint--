import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const HotItem = () => {
    return (
        <div className='px-5'>
            <div className='mt-16 mb-10'>
                <div><center><h1 className='font-bold text-2xl'>Our Hot Pizza</h1></center></div>
                <div><center><h1 className='text-green-600'><FaLeaf></FaLeaf></h1></center></div>
            </div>
            <div className='md:flex justify-center text-center md:mx-36 gap-8 md:px-32'>
                <div>
                    <img src="https://demo.strixdevs.com/pizza/wp-content/uploads/2022/08/pizza_small_03.png" alt="" />
                    <h1 className='font-mono font-bold text-xl mb-5 text-orange-400'>Veggie Fresco Pizza</h1>
                    <p>Tomato, Green Peppers, Onions, Mushrooms, Black-Olives, Melted Mozzarella, Perfect Stone
                        Fired Crust</p>
                </div>
                <div>
                    <img src="https://demo.strixdevs.com/pizza/wp-content/uploads/2022/08/pizza_small_04.png" alt="" />
                    <h1 className='font-mono font-bold text-xl mb-5 text-orange-400'>Best Pizza</h1>
                    <p>Tomato, Green Peppers, Onions, Mushrooms, Black-Olives, Melted Mozzarella, Perfect Stone
                        Fired Crust</p>
                </div>
                <div>
                    <img src="https://demo.strixdevs.com/pizza/wp-content/uploads/2022/08/pizza_small_02.png" alt="" />
                    <h1 className='font-mono font-bold text-xl mb-5 text-orange-400'>4 Cheese Classico</h1>
                    <p>Tomato, Green Peppers, Onions, Mushrooms, Black-Olives, Melted Mozzarella, Perfect Stone
                        Fired Crust</p>
                </div>
                <div>
                    <img src="https://demo.strixdevs.com/pizza/wp-content/uploads/2022/08/pizza_small_02.png" alt="" />
                    <h1 className='font-mono font-bold text-xl mb-5 text-orange-400'>BBQ Chicken Pizza</h1>
                    <p>omato, Green Peppers, Onions, Mushrooms, Black-Olives, Melted Mozzarella, Perfect Stone
                        Fired Crust</p>
                </div>
            </div>
        </div>
    );
};

export default HotItem;