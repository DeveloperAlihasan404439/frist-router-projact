import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Menu = () => {
    const users = useLoaderData()
    const data = users.products;
    return (
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 '>
            {
                data?.map((user, i) => <User key={i} user={user}></User>)
            }
        </div> */}
    );
};

export default Menu;