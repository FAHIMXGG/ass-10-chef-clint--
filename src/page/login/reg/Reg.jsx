import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Footer from '../../../Shared/NavBar/Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Reg = () => {
    const { createUser, updateUserData } = useContext(AuthContext);
    const [error, setError]=useState('')
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password!==confirm){
            setError('Password not matched')
            return;
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user, name, photo)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }


    return (
        <div className=''>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 mx-8 md:mx-52 lg:px-80 mt-10 md:mb-32">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="text"
                        name='name'
                        placeholder="Name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Your Photo"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="text"
                        name='photo'
                        placeholder="Photo Url"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        name='email'
                        placeholder="name@flowbite.com"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        name='password'
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        type="password"
                        name='confirm'
                        required={true}
                        shadow={true}
                    />
                </div>
                <p className='text-orange-700'>{error}</p>
                <div><p className='text-xs font-medium'>
                    Already Have An Account? <Link className='text-orange-400 font-bold' to="/Login">Login</Link> <br />
                    <p>Or Login with <Link className='text-orange-400 font-bold' to="/Login">Google or GitHub</Link></p>
                    </p></div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" 
                    onClick={handleAccepted}
                    type="checkbox" 
                    name="accept" 
                    
                    />
                    <Label htmlFor="agree"
                    
                    >
                        I agree with the  {' '}
                        <Link
                            href="/forms"
                            className="text-orange-400 hover:underline dark:text-blue-500"
                        >
                             terms and conditions 
                        </Link>
                    </Label>
                </div>
                <Button disabled={!accepted} className='bg-orange-400 hover:bg-orange-800' type="submit" to="/home">
                    Register new account
                </Button>
                
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Reg;