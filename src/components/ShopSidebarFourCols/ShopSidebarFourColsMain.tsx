import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import ShopFourMainArea from './ShopFourMainArea';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
 

const ShopSidebarFourColsMain = () => {
    return (
        <>
            <BreadCrumb title='Shop'/>
            <ShopFourMainArea/>
            <SidebarMain />
          
        </>
    );
};

export default ShopSidebarFourColsMain;