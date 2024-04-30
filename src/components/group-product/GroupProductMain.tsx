import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import GroupArea from './GroupArea';

const GroupProductMain = () => {
    return (
        <>
            <BreadCrumb title='Group Products'/>
            <GroupArea/>
            <SidebarMain/>
        </>
    );
};

export default GroupProductMain;