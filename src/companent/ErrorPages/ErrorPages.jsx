import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPages = () => {
    const error = useRouteError()
    const {data,status} = error;
    return (
        <div className='flex flex-col gap-6 justify-center items-center h-[100vh]'>
            <img src="https://w3-lab.com/wp-content/uploads/2022/09/FOR-WEB-404-astronaut-770x444.jpg" alt=""  className='rounded-lg'/>
            <h1 className='text-xl text-black font-normal'>{data} <span className='text-orange-700'>{status}</span></h1>
            <Link to='/' className='text-2xl font-semibold text-white rounded-lg bg-gradient-to-r from-[#5756FD] to-[#D040F5] hover:bg-gradient-to-l hover:from-[#1313fa] hover:to-[#ce26f8] px-20 py-2 '>Go To Home Pages</Link>
        </div>
    );
};

export default ErrorPages;