'use client'

import React, { useState } from 'react'

import NavBar from '@/layout/dashboard/navBar/NavBar'
import Sidebar from '@/layout/dashboard/sidebar/sidebar'
import ReduxProvider from '@/redux/provider'
import './main.css'
import { IsAdmin } from '@/hooks/useProtect'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const handdelSideBarOpen = (isOpen: boolean) => {
    setSideBarOpen(isOpen)
  }

  return (
    <IsAdmin>
      <Sidebar isOpen={sideBarOpen} setOpen={handdelSideBarOpen} />
      <NavBar setOpen={handdelSideBarOpen} />
      <main>
        <ReduxProvider>
          { children }
        </ReduxProvider>
      </main>
    </IsAdmin>
  )
}

export default Layout