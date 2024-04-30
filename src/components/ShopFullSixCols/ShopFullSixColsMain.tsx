import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import ShopFullSixArea from './ShopFullSixArea';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';


const ShopFullSixColsMain = () => {
    return (
        <>
            <BreadCrumb title='Shop'/>
            <ShopFullSixArea/>
            <SidebarMain/>
            
        </>
    );
};

export default ShopFullSixColsMain;