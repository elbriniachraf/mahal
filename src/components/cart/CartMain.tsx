import React from 'react';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import CartArea from './CartArea';

const CartMain = () => {
    return (
        <>
            <BreadCrumb title='My Cart'/>
            <CartArea/>
            <SidebarMain vendorId="-1"/>
        </>
    );
};

export default CartMain;