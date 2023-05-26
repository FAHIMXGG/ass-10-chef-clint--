import React, { useContext, useEffect, useState } from 'react';
import ChefCard from './ChefCard/ChefCard';
import { FaLeaf } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { Spinner } from 'flowbite-react';






const Chef = () => {
    const {loading} = useContext(AuthContext)
    const [chef, setChef] = useState([]);


    useEffect(() => {
        fetch('https://chef-recipe-server-fahimxgg.vercel.app/chef/')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    //console.log(chef);

    // const chef = useLoaderData()
    // console.log(chef)
    if(loading){
        return (  <div className="text-center mt-24">
        <Spinner
    color="failure"
    aria-label="Failure spinner example"
  />
      </div>)
    }
 

    return (
        <div>

            <div><center><h1 className='font-bold text-2xl'>Our Chef</h1></center></div>
            <div><center><h1 className='text-green-600'><FaLeaf></FaLeaf></h1></center></div>
        
            <div className='grid lg:grid-cols-3 gap-10 lg:px-28 mt-6 p-5 '>
                {
                    chef.map(data => <ChefCard
                        key={data._id}
                        data={data}
                    ></ChefCard>
                    )
                }
            </div>
        </div>
    );
};

export default Chef;