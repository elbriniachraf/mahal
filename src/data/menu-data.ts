import { MenuType } from "@/interFace/interFace";

const menu_data: MenuType[] = [
  {
    id: 1,
    hasDropdown: true,
    active: true,
    title: "Home",
    pluseIncon: true,
    link: "#",
    submenus: [
      { title: "Home 1", link: "/" },
      { title: "Home 2", link: "/home-2" },
      { title: "Home 3", link: "/home-3" },
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
        title: "Shop",
        link: "#",
        megaMenu: [
          { title: "Shop Sidebar 5 Column", link: "/shop-sidebar-5-column" },
          { title: "Shop Sidebar 4 Column", link: "/shop-sidebar-4-column" },
          { title: "Shop Sidebar 3 Column", link: "/shop-sidebar-3-column" },
          { title: "Shop Full 6 Column", link: "/shop-full-6-column" },
          { title: "Shop Full 5 Column", link: "/shop-full-5-column" },
          { title: "Shop Full 4 Column", link: "/shop-full-4-column" },
          { title: "Group Product", link: "/group-product" },
        ],
      },
      { title: "Shop Details", link: "/shop-details" },
      { title: "Wishlist", link: "/wishlist" },
      { title: "Cart", link: "/cart" },
      { title: "Compare", link: "/compare" },
      { title: "Checkout", link: "/checkout" },
    ],
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    title: "Pages",
    pluseIncon: true,
    link: "#",
    submenus: [
      { title: "About Ussss", link: "/about" },
      { title: "Become Vendor", link: "/become-vendor" },
      { title: "Create Vendor Account", link: "/create-vendor-account" },
      { title: "Vendors List", link: "/vendors-list" },
      { title: "Profile", link: "/profile" },
      { title: "Track Order", link: "/track-order" },
      { title: "Privecy Policy", link: "/privecy-policy" },
      { title: "Register", link: "/register" },
      { title: "Login", link: "/login" },
      { title: "FAQ", link: "/faq" },
      { title: "404 page", link: "/404-page" },
    ],
  },

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
