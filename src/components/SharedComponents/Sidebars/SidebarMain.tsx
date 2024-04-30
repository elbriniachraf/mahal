"use client";
import React from "react";
import SidebarCard from "./SidebarCard";
import useGlobalContext from "@/hooks/use-context";
import SidebarWishlist from "./SidebarWishlist";
import SidebarFilter from "./SidebarFilter";
import SidebarMenu from "./SidebarMenu";

const SidebarMain = () => {
  const { sideCartOpen, setSideCartOpen, sideWishlistOpen,setSideWishlistOpen,sideFilterOpen, setSideFilterOpen ,sideMenuOpen,toggleSideMenu} = useGlobalContext();
  return (
    <>
      <div onClick={() => setSideCartOpen(!sideCartOpen)} className={`offcanvas-overlay ${sideCartOpen ? "overlay-open" : ""}`}></div>
      <div onClick={() => setSideWishlistOpen(!sideWishlistOpen)} className={`offcanvas-overlay ${sideWishlistOpen ? "overlay-open" : ""}`}></div>
      <div onClick={() => setSideFilterOpen(!sideFilterOpen)} className={`offcanvas-overlay ${sideFilterOpen ? "overlay-open" : ""}`}></div>
      <div onClick={toggleSideMenu} className={`offcanvas-overlay ${sideMenuOpen ? "overlay-open" : ""}`}></div>
      <div className="offcanvas-overlay-white"></div>
      
      <SidebarMenu/>
      <SidebarCard />
      <SidebarWishlist />
      <SidebarFilter />
    </>
  );
};

export default SidebarMain;
