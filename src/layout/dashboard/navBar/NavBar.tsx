import React from 'react'

import Classes from './NavBar.module.scss';
import { PiListBold } from "react-icons/pi";

type Props = {
  setOpen: (value: boolean) => void
}

const NavBar = ({setOpen}: Props) => {
  return (
    <nav className={Classes.navbar}>
      <div className={Classes['navbar__toggle-sidebar']} onClick={_=>setOpen(true)}>
        <PiListBold  />
      </div>
    </nav>
  )
}

export default NavBar