
import { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import { Navigate } from 'react-router-dom'; // Import Navigate for navigation

function SignIn() {
    const [user, setUser] = useState(null);

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                localStorage.setItem('email', result.user.email);
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });
    }

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setUser({ email });
        }
    }, []);

    if (user) {
        return <Navigate to="/home" />; // Navigate to /home route if user is logged in
    }

    return (
        <div className=' mt-40 text-center flex justify-center flex-col items-center'>
            <h1 className=' font-semibold text-2xl'>Welcome to  <span className=' text-yellow-500 font-semibold'>Clone My Trips</span></h1>
            <div className=' mt-40 bg-yellow-500 w-20 h-8 rounded-xl  pt-1 font-semibold '>
                <button onClick={handleClick}>Sign in</button>
            </div>
        </div>
    );
}

export default SignIn;
