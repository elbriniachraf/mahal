import React from 'react'
import Link from 'next/link'

import SideBrand from './SidebarBrand.module.scss'

type Props = {}

const SideBarBrand = (props: Props) => {
  return (
    <div className={SideBrand['sidebar-brand']}>
      <Link href='/dashboard' className={SideBrand['sidebar-brand__link']}>
        MAHALAT.Ma
      </Link>
    </div>
  )
}

export default SideBarBrand