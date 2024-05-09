
import React from 'react';

const Home = () => {
    const logout = () => {
        localStorage.clear();
      
        window.location.href = '/'; 
    }

    // Retrieve user email from localStorage
    const userEmail = localStorage.getItem('email');

    return (
        <div className=' mt-40 text-center flex justify-center flex-col items-center'>
            <h1 className=' font-semibold text-2xl'>Welcome, <span className=' text-yellow-500 font-semibold'>{userEmail}</span></h1>
            <button className=' p-2 mt-20 bg-yellow-500 w-20 h-8 rounded-xl  pt-1 font-semibold ' onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;
