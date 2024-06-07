import React from 'react'
import Link from 'next/link'

import SideProfile from './sideBarProfile.module.scss'
import Image from 'next/image'

type Props = {}

const SideBarProfile = (props: Props) => {
  return (
    <div className={SideProfile['sidebar-profile']}>
      <Link href='/profile' className={SideProfile['sidebar-profile__link']}>
        <Image src={'/imgs/profile.jpg'} width={30} height={30} alt='user profile' className={SideProfile.img} />
        <span className={SideProfile.name}>
          Kandad Mohamed
        </span>
      </Link>
    </div>
  )
}

export default SideBarProfile;