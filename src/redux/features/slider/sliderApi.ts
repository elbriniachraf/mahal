'use client';
import build from "next/dist/build";
import { apiSlice } from "../api";
import { ISlider } from "@/utils/interfaces";


const apiSliceWithtag = apiSlice.enhanceEndpoints({addTagTypes: ['slider']});
const sliderApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    createSlider: builder.mutation({
      query: (slider: ISlider) => {
        const formData = new FormData();
        formData.append("titre", slider?.titre);
        formData.append("description", slider?.description);
        formData.append("url", slider?.url);
        formData.append("image", slider?.image);
        
        return {
          url: 'sliders',
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['slider'],
    }),
    upDateSlider: builder.mutation({
      query: (slider: ISlider ) => {
        const formData = new FormData();
        formData.append("titre", slider?.titre);
        formData.append("description", slider?.description);
        formData.append("url", slider?.url);
        
        if(typeof slider.image !== 'string'){
          formData.append("image", slider?.image);
        }
        
        return{
          url: `categories/${slider.id}`,
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['slider'],
    }),
    getSliders: builder.query({
      query: () => ({
        url: `sliders/`, 
        method: 'GET',
      }),
      providesTags: ['slider'],
    }),
    getSlider: builder.query({
      query: (id: string) => `slider/${id}`,
    }),
    deleteSlider: builder.mutation({
      query: (id: string) => ({
        url: `slider/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['slider'],
    }),
  })
})

export const { 
  useCreateSliderMutation, 
  useGetSlidersQuery, 
  useGetSliderMutation,
  useLazyCreateSliderQuery, 
  useUpDateSliderMutation, 
  useDeleteSliderMutation 
} = sliderApi;