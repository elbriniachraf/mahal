import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import Vendors from './Vendors';

const VendorListMain = () => {
    return (
        <>
            <BreadCrumb title='Vendor List'/>
            <Vendors/>
        </>
    );
};

export default VendorListMain;