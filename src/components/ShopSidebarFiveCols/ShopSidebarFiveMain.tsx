import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import ShopMainArea from './ShopMainArea';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
 
 

const ShopSidebarFiveMain = () => {
    return (
        <>
            <BreadCrumb title='Shop'/>
            <ShopMainArea/>
            <SidebarMain />
        </>
    );
};

export default ShopSidebarFiveMain;