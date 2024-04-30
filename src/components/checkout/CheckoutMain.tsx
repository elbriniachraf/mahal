import React from 'react';
import Stepper from './Stepper';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import BreadCrumb from '../SharedComponents/BreadCrumb';

const CheckoutMain = () => {
    return (
        <>  <BreadCrumb title='Checkout'/>
            <Stepper/>
            <SidebarMain/>
        </>
    );
};

export default CheckoutMain;