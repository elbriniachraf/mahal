'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io";

import SideLinks from './SideBarLinks.module.scss'
import { linksItems } from '@/utils/sidebar';


type Props = {}

const SideBarLinks = (props: Props) => {
  const pathName = usePathname();
  const [linkOpen, setLinkOpen] = useState(-1);
  const handelLinkOpen = (index: number) => {
    if(linkOpen === index){
      setLinkOpen(-1)
    }else{
      setLinkOpen(index)
    }
  }
  
  return (
    <div className={SideLinks['sidebar-links']}>
      <ul>
        {
          linksItems.map((link, index) => (
            <li key={`link-${index}`}>
              <div onClick={_=>handelLinkOpen(index)} className={SideLinks['link-toggle']}>
                {link.title}
                <span className={SideLinks.icon}>
                  <IoIosArrowBack />
                </span>
              </div>
                <ul className={`${SideLinks.items}  ${linkOpen === index && SideLinks.active}`} key={index}>
                  {
                    link.links.map((linkItem, indexItem) =>(
                      <li key={`sous-link-${indexItem}`} >
                        <Link 
                          href={`/administrator${linkItem.href}`} 
                          className={`
                            ${SideLinks.item}
                            ${pathName == `/administrator${linkItem.href}` ? SideLinks.active : ""}
                          `
                          } >
                          {linkItem.title}
                        </Link>
                      </li> 
                    ))
                  }
                </ul>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SideBarLinks;