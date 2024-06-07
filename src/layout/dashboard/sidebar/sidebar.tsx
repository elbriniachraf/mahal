import React from 'react'

import SideBarBrand from './sideBarBrand/SideBarBrand';
import SideBarProfile from './sideBarProfile/sideBarProfile';
import SideBarLinks from './sideBarLinks/SideBarLinks';

import Classes from './sidebar.module.scss';

type Props = {
  isOpen: boolean,
  setOpen: (value: boolean) => void
}

const Sidebar =  ({isOpen, setOpen}: Props) => {
  return (
    <>
      <div className={`${Classes.sidebar} ${isOpen && Classes['sidebar-active']} sidebar-active`}>
        <SideBarBrand />
        <SideBarProfile />
        <SideBarLinks />

      </div>
      <div className={`${Classes.overlay } ${isOpen && Classes['sidebar-active']}`} onClick={_=>setOpen(false)} >
      </div>
    </>
  )
}

export default Sidebar
