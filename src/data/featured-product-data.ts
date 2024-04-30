import featured8 from "../../public/assets/img/product/featured/8.png"
import featured1 from "../../public/assets/img/product/featured/1.png"
import featured2 from "../../public/assets/img/product/featured/2.png"
import featured3 from "../../public/assets/img/product/featured/3.png"
import featured4 from "../../public/assets/img/product/featured/4.png"
import featured5 from "../../public/assets/img/product/featured/5.png"
import featured6 from "../../public/assets/img/product/featured/6.png"
import { StaticImageData } from "next/image"


export interface featuredType{
    id:number;
    bannerImg:StaticImageData;
    productId:number;
}

export const featured_data:featuredType[] = [
    {
        id:1,
        bannerImg:featured8,
        productId:1
    },
    {
        id:2,
        bannerImg:featured1,
        productId:30
    },
    {
        id:3,
        bannerImg:featured3,
        productId:3
    },
    {
        id:4,
        bannerImg:featured6,
        productId:44
    },
    {
        id:5,
        bannerImg:featured5,
        productId:5
    },
    {
        id:6,
        bannerImg:featured4,
        productId:6
    },
]