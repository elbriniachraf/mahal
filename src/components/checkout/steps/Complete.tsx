import Link from 'next/link';
import React from 'react';

const Complete = () => {
    return (
        <>
            <div className="order_summary text-center">
            <h3>THANK YOU</h3>
            <p>Payment Is Successfully Processsed And Your Order Is On The Way </p>
            <p>Transaction ID:1254284759352</p>
             <Link className='fill_btn_two' href="/profile">Back To Home</Link>
            </div>
        </>
    );
};

export default Complete;