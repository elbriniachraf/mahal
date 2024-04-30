import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import LoginForm from '@/form/LoginForm';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';

const LoginMain = () => {
    return (
        <>
            <BreadCrumb title='Login'/>
            <LoginForm/>
            <SidebarMain/>
        </>
    );
};

export default LoginMain;