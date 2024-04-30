import { vendorType } from "@/interFace/interFace";
import brand1 from "../../public/assets/img/vendor/Logo/TrendyThreads.png";
import brand2 from "../../public/assets/img/vendor/Logo/ChicWardrobe.png";
import brand3 from "../../public/assets/img/vendor/Logo/StyleHub.png";
import brand4 from "../../public/assets/img/vendor/Logo/FashionFusion.png";
import brand5 from "../../public/assets/img/vendor/Logo/DapperDen.png";
import brand6 from "../../public/assets/img/vendor/Logo/UrbanElegance.png";
import brand7 from "../../public/assets/img/vendor/Logo/couturecorner.png";
import brand8 from "../../public/assets/img/vendor/Logo/ModishMania.png";

// vendor data

import vendor1 from "../../public/assets/img/vendor/banner/1.png"
import vendor2 from "../../public/assets/img/vendor/banner/2.png"
import vendor3 from "../../public/assets/img/vendor/banner/3.png"
import vendor4 from "../../public/assets/img/vendor/banner/4.png"
import vendor5 from "../../public/assets/img/vendor/banner/5.png"
import vendor6 from "../../public/assets/img/vendor/banner/6.png"
import vendor7 from "../../public/assets/img/vendor/banner/7.png"
import vendor8 from "../../public/assets/img/vendor/banner/8.png"
 
 
export const vendor_data: vendorType[] = [
  {
    id: 1,
    vendor: "TrendyThreads",
    verified:true,
    vendorStatus:"Top Seller",
    Items:150,
    Sells:200,
    vendorId: "v-00001",
    description:
      "Welcome to TrendyThreads, where fashion meets comfort! Dive into our collection of the latest trends in clothing, offering an eclectic mix of styles for every occasion. From casual tees to elegant dresses, we curate pieces that exude confidence and style. Explore our virtual shelves and discover your next wardrobe staple!",
    averageRating: 80,
    totalRating: 320,
    vendorImg: brand1,
    vendorBanner:vendor1,
  },
  {
    id: 2,
    vendor: "ChicWardrobe",
    verified:true,
    vendorStatus:"Best Seller",
    Items:89,
    Sells:430,
    vendorId: "v-00002",
    description:
      "Indulge in the epitome of sophistication at ChicWardrobe, your go-to destination for timeless elegance. Immerse yourself in our meticulously curated selection of apparel, meticulously crafted to elevate your style game. Whether you're searching for a classic shirt or a statement piece, our collection promises to infuse your wardrobe with chic flair and effortless grace.",
    averageRating: 2,
    totalRating: 170,
    vendorImg: brand2,
    vendorBanner:vendor2,
  },
  {
    id: 3,
    vendor: "StyleHub",
    verified:false,
    vendorStatus:"Level 2 Seller",
    Items:50,
    Sells:140,
    vendorId: "v-00003",
    description:
      "Welcome to StyleHub, where individuality reigns supreme! Our diverse range of fashion-forward garments celebrates the uniqueness of every style enthusiast. From cutting-edge streetwear to sophisticated ensembles, we offer a curated selection that empowers you to express your personality with confidence. Step into our StyleHub and unleash your fashion potential.",
    averageRating: 3,
    totalRating: 256,
    vendorImg: brand3,
    vendorBanner:vendor3,
  },
  {
    id: 4,
    vendor: "FashionFusion",
    verified:true,
    vendorStatus:"Featured Seller",
    Items:150,
    Sells:200,
    vendorId: "v-00004",
    description:
      "Embark on a journey of style evolution with FashionFusion, your ultimate destination for sartorial innovation. Our collection seamlessly blends contemporary trends with timeless classics, resulting in a fusion of fashion that is both modern and enduring. Discover the perfect synthesis of style and substance as you explore our eclectic array of garments, designed to inspire and captivate",
    averageRating: 5,
    totalRating: 26,
    vendorImg: brand4,
    vendorBanner:vendor4,
  },
  {
    id: 5,
    vendor: "DapperDen",
    verified:false,
    vendorStatus:"Trusted Seller",
    Items:120,
    Sells:500,
    vendorId: "v-00005",
    description:
      "Step into the world of refined elegance at DapperDen, where sophistication meets suave charm. Our carefully curated selection of menswear exudes timeless appeal, offering a range of impeccably tailored shirts, pants, and accessories. Elevate your wardrobe with our collection of distinguished attire, crafted to make a lasting impression wherever you go.",
    averageRating: 3,
    totalRating: 80,
    vendorImg: brand5,
    vendorBanner:vendor5,
  },
  {
    id: 6,
    vendor: "UrbanElegance",
    verified:true,
    vendorStatus:"New Vendor",
    Items:85,
    Sells:148,
    vendorId: "v-00006",
    description:
      "Experience the essence of metropolitan style at UrbanElegance, where urban flair meets effortless elegance. Our curated selection of contemporary clothing captures the vibrancy of city living, offering a blend of sleek silhouettes and edgy designs. From stylish streetwear to chic evening attire, our collection caters to the modern urbanite who embraces fashion as a form of self-expression.",
    averageRating: 4.5,
    totalRating: 57,
    vendorImg: brand6,
    vendorBanner:vendor6,
  },
  {
    id: 7,
    vendor: "CoutureCorner",
    verified:true,
    vendorStatus:"Rising Star",
    Items:96,
    Sells:180,
    vendorId: "v-00007",
    description:
      "Indulge in the luxury of haute couture at CoutureCorner, your exclusive destination for exquisite fashion finds. Immerse yourself in our curated collection of designer garments, meticulously crafted to perfection. From opulent gowns to tailored suits, each piece in our collection epitomizes timeless elegance and unparalleled craftsmanship. Discover the epitome of sartorial splendor at CoutureCorner",
    averageRating: 3.8,
    totalRating: 380,
    vendorImg: brand7,
    vendorBanner:vendor7,
  },
  {
    id: 8,
    vendor: "ModishMania",
    verified:false,
    vendorStatus:"New Vendor",
    Items:150,
    Sells:200,
    vendorId: "v-00008",
    description:
      "Enter a world of fashion frenzy at ModishMania, where cutting-edge trends collide with avant-garde style. Our handpicked selection of contemporary apparel offers a fresh perspective on modern fashion, catering to the bold and the adventurous. Embrace your individuality with our eclectic range of statement pieces, designed to ignite your passion for all things modish.",
    averageRating: 4,
    totalRating: 126,
    vendorImg: brand8,
    vendorBanner:vendor8,
  },
];

