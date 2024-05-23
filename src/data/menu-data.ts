import { MenuType } from "@/interFace/interFace";

const menu_data: MenuType[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Home",
    pluseIncon: true,
    link: "#",
    submenus: [
      { title: "Home 1", link: "/" },
      
    ],
  },
  {
    id: 2,
    hasDropdown: true,
    megaMenu: true,
    active: true,
    title: "Shop",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "List des produits",
        link: "/shop-sidebar-5-column" 
        
      },
      { title: "List Des boutiques", link: "/vendors-list" },
      { title: "Wishlist", link: "/wishlist" },
      { title: "Cart", link: "/cart" },
      { title: "Compare", link: "/compare" },
      { title: "Checkout", link: "/checkout" },
    ],
  },
  // {
  //   id: 3,
  //   hasDropdown: true,
  //   active: true,
  //   title: "Pages",
  //   pluseIncon: true,
  //   link: "#",
  //   submenus: [
  //     { title: "About Ussss", link: "/about" },
  //     { title: "Become Vendor", link: "/become-vendor" },
  //     { title: "Create Vendor Account", link: "/create-vendor-account" },
  //     { title: "Vendors List", link: "/vendors-list" },
  //     { title: "Profile", link: "/profile" },
  //     { title: "Track Order", link: "/track-order" },
  //     { title: "Privecy Policy", link: "/privecy-policy" },
  //     { title: "Register", link: "/register" },
  //     { title: "Login", link: "/login" },
  //     { title: "FAQ", link: "/faq" },
  //     { title: "404 page", link: "/404-page" },
  //   ],
  // },

  {
    id: 4,
    hasDropdown: true,
    active: true,
    title: "Blog",
    pluseIncon: true,
    link: "#",
    submenus: [
      { title: "Blog", link: "/blog" },
      { title: "Blog Details", link: "/blog-details" },
    ],
  },

  {
    id: 6,
    hasDropdown: false,
    active: true,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;
