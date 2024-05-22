import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import WishlistArea from './WishlistArea';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';

const WishlistMain = () => {
    return (
        <>
            <BreadCrumb title='My Wishlist'/>
            <WishlistArea/>
             <SidebarMain vendorId="-1"/>
        </>
    );
};

export default WishlistMain;