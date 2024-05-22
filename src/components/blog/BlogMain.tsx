import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb';
import BlogArea from './BlogArea';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';

const BlogMain = () => {
    return (
        <>
            <BreadCrumb title='Blog'/>
            <BlogArea/>
            <SidebarMain vendorId="-1"/>
        </>
    );
};

export default BlogMain;