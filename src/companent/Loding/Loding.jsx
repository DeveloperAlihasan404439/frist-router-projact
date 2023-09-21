import React from 'react';
import './style.css'
const Loding = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="flex justify-between items-center gap-4">
            <div className="loding"></div>
            <div className="waviy">
                <span className=' text-[30px] md:text-[60px]'>L</span>
                <span className=' text-[30px] md:text-[60px]'>O</span>
                <span className=' text-[30px] md:text-[60px]'>A</span>
                <span className=' text-[30px] md:text-[60px]'>D</span>
                <span className=' text-[30px] md:text-[60px]'>I</span>
                <span className=' text-[30px] md:text-[60px]'>G</span>
                <span className=' text-[30px] md:text-[60px]'>...</span>
            </div>
        </div>
    </div>
    );
};

export default Loding;