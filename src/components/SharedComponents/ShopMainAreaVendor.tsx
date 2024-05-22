"use client";
import React, { useEffect, useState } from "react";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import { useSearchForVendor } from "@/hooks/useSearch";
import FilterHeaderCommon from "../SharedComponents/Sidebars/FilterHeaderCommon";
import { useFilterByVendor } from "@/hooks/useFilterByVendor";
import SidebarFilterMainTwo from "../ShopSidebarFiveCols/subComponents/filterTwo/SidebarFilterMainTwo";
import Pagination from "./Pagination";
import axios from "axios";
interface propsType {
  vendorId: string;
}
const ShopMainAreaVendor = ({ vendorId }: propsType) => {
  const filterData = useFilterByVendor(vendorId);
  const searchData = useSearchForVendor(vendorId as string);
  const mapData = searchData?.length ? searchData : filterData;

  const [vendorInfo, setVendorInfo] = useState<any>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendorInfo = async () => {
      try {
        const response = await axios.get(`https://elbriniachraf.com/api/vendors/${vendorId}`);
       
        const data = response.data;
        setVendorInfo(data);


        console.log(vendorInfo);
        
        setLoading(false);
      } catch (error) {
       
        setLoading(false);
      }
    };

    fetchVendorInfo();
  }, [vendorId]);
  return (
    <>
      <div className="shop-main-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <SidebarFilterMainTwo vendorId={vendorId} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="shop-main-wrapper mb-60">
                <FilterHeaderCommon />
                <div className="products-wrapper products-5-column">
                <>
                {vendorInfo && vendorInfo.products && vendorInfo.products.map((item: any) => (
  <SingleProductCard key={item.id} item={item} />
))}

  </>
                  
                </div>
                <Pagination/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopMainAreaVendor;
