// 'use client';
import build from "next/dist/build";
import { apiSlice } from "../api";
import { IProduit } from "@/utils/interfaces";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const apiSliceWithtag = apiSlice.enhanceEndpoints({addTagTypes: ['produit']});
const produitApi = apiSliceWithtag.injectEndpoints({
  endpoints: (builder: any) => ({
    createProduit: builder.mutation({
      query: (produit: IProduit) => {
        const formData = new FormData();
        formData.append("name", produit?.titre);
        formData.append("slug", produit?.slug);
        formData.append("status", produit?.status);
        formData.append("description", produit?.description);
        formData.append("price", produit?.price);
        formData.append("categorie_id", produit?.categorie);
        formData.append(`images`, produit?.images);
        
        /*
        // for (let index = 0; index < produit?.images.length; index++) {
        //   formData.append(`images`, produit?.images[index]);
        //   formData.append(`images`, produit?.images[index]);
        // }

        // const newProduit = {
        //   name: produit?.titre,
        //   slug: produit?.slug,
        //   status: produit?.status,
        //   description: produit?.description,
        //   price: produit?.price,
        //   images: produit?.images,
        //   categorie_id: produit?.categorie,
        // }
        */

        
        return {
          url: 'products',
          method: 'POST',
          body: formData,
        }
      },
    }),
    deleteProduit: builder.mutation({
      query: (id: string) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['produit'],
    }),
    getProduits: builder.query({
      // query: (filter) => ({url: `courses?page=${filter.page}&sort=${filter.sort}&search=${filter.search}`, method: 'GET',credentials: "include" as const}),
      query: () => `products/`,
      providesTags: ['produit'],
    }),
    getProduit: builder.query({
      // query: (filter) => ({url: `courses?page=${filter.page}&sort=${filter.sort}&search=${filter.search}`, method: 'GET',credentials: "include" as const}),
      query: (id: string) => `products/${id}`,
      providesTags: ['produit'],
    }),
    upDateProduit: builder.mutation({
      query: (produit: IProduit) => {
        const formData = new FormData();
        formData.append("name", produit?.titre);
        formData.append("slug", produit?.slug);
        formData.append("status", produit?.status);
        formData.append("description", produit?.description);
        formData.append("price", produit?.price);
        formData.append("categorie_id", produit?.categorie);
        formData.append(`images`, produit?.images);
        
        /*
        // for (let index = 0; index < produit?.images.length; index++) {
        //   formData.append(`images`, produit?.images[index]);
        //   formData.append(`images`, produit?.images[index]);
        // }

        // const newProduit = {
        //   name: produit?.titre,
        //   slug: produit?.slug,
        //   status: produit?.status,
        //   description: produit?.description,
        //   price: produit?.price,
        //   images: produit?.images,
        //   categorie_id: produit?.categorie,
        // }
        */

        
        return {
          url: `products/${produit.id}`,
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['produit'],
    }),
  })
})

export const { 
  useCreateProduitMutation, 
  useGetProduitsQuery, 
  useDeleteProduitMutation, 
  useUpDateProduitMutation,
  useGetProduitQuery
} = produitApi;