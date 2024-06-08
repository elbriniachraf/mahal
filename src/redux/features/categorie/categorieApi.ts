// 'use client';
import { apiSlice } from "../api";
import { ICategorie } from "@/utils/interfaces";

const apiSliceWithtag = apiSlice.enhanceEndpoints({addTagTypes: ['categorie']});
const categorieApi = apiSliceWithtag.injectEndpoints({
  
  endpoints: (builder: any) => ({
    createCategorie: builder.mutation({
      query: (categorie: ICategorie) => {
        const formData = new FormData();
        formData.append("image", categorie?.image);
        formData.append("name", categorie?.name);
        formData.append("description", categorie?.description);
        formData.append("slug", categorie?.slug);
        formData.append("count", categorie?.count);
        
        return {
          url: 'categories',
          method: 'POST',
          body: formData,
        }
      }
    }),
    upDateCategorie: builder.mutation({
      query: (categorie: ICategorie ) => {
        const formData = new FormData();
        formData.append("name", categorie?.name);
        formData.append("description", categorie?.description);
        formData.append("slug", categorie?.slug);
        formData.append("count", categorie?.count);

        if(typeof categorie.image !== 'string'){
          formData.append("image", categorie?.image);
        }
        
        return{
          url: `categories/${categorie.id}`,
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['categorie'],
    }),
    deleteCategorie: builder.mutation({
      query: (id: string) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['categorie'],
    }),
    getCategories: builder.query({
      // query: (filter) => ({url: `courses?page=${filter.page}&sort=${filter.sort}&search=${filter.search}`, method: 'GET',credentials: "include" as const}),
      query: () => `categories/`,
      providesTags: ['categorie'],
    }),
    getCategorie: builder.query({
      // query: (filter) => ({url: `courses?page=${filter.page}&sort=${filter.sort}&search=${filter.search}`, method: 'GET',credentials: "include" as const}),
      query: (id: any) => `categories/${id}`,
      providesTags: ['categorie'],
    }),
  })
})

export const { 
  useCreateCategorieMutation, 
  useGetCategoriesQuery, 
  useUpDateCategorieMutation, 
  useDeleteCategorieMutation, 
  useGetCategorieQuery 
} = categorieApi;