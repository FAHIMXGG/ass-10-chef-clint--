import React from 'react';
import Info from '../page/ChefInfo/Info/Info';
import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/NavBar/Footer/Footer';


const ChefLayout = () => {
    const navigation = useNavigation();
    return (
        <div >
            <NavBar></NavBar>
            {navigation.state ===

                'loading'

                &&

                <div className="text-center">
                    <Spinner aria-label="Default status example" />
                </div>

            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;