import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../Shared/NavBar/Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [error, setError] = useState('');
    const from = location.state?.from?.pathname || '/'

    // if (loading) {
    //     return (<div className="text-center mt-24">
    //         <Spinner
    //             color="failure"
    //             aria-label="Failure spinner example"
    //         />
    //     </div>)
    // }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    console.log(error)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    return (
        <div className=''>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 mx-8 md:mx-52 md:px-80 mt-10 md:mb-64">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"

                        />
                    </div>
                    <TextInput className='border-red-400'
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput 
                        id="password1"
                        type={show ? 'text' : 'password'}
                        name='password'
                        required={true}
                    />
                    <button className='  p-1  border rounded-lg  mt-2' onClick={(event) => {event.preventDefault(); setShow(!show)}}><small>
                                {
                                    show ? <span><FaEyeSlash></FaEyeSlash></span> : <span><FaEye></FaEye></span>
                                }</small></button>
                </div>
                <div>
                    <p className='text-red-500'>{error && "email address or password doesn't match"}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <div><p className='text-xs font-medium'>
                    No Account? <Link className='text-orange-400 font-bold' to="/reg">Register</Link> <br />
                    <p>Or Login with Google or GitHub</p>
                </p></div>
                <Button className='bg-orange-400 hover:bg-orange-800' type="submit">
                    Submit
                </Button>
                <div className='flex gap-3 justify-center'>
                    <Button className='bg-orange-400 hover:bg-orange-800' onClick={handleGoogleSignIn}>Google</Button>
                    <Button className='bg-orange-400 hover:bg-orange-800' onClick={handleGitHubSignIn}>GitHub</Button>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Login;