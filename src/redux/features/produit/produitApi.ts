// 'use client';
import build from "next/dist/build";
import { apiSlice } from "../api";

interface IProduit {
  titre: string;
  description: string;
  slug: string;
  status: string;
  image: string;
}
const produitApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    createProduit: builder.mutation({
      query: (produit: IProduit) => ({
        url: 'produits/',
        method: 'POST',
        body: produit,
        credentials: "include",
      })
    }),
    deleteProduit: builder.mutation({
      query: (produit: IProduit) => ({
        url: 'produits/',
        method: 'DELETE',
        body: produit,
      })
    }),
    getProduits: builder.query({
      // query: (filter) => ({url: `courses?page=${filter.page}&sort=${filter.sort}&search=${filter.search}`, method: 'GET',credentials: "include" as const}),
      query: (id: string) => ({
        url: `produits/${id}`, 
        method: 'GET',
        // credentials: "include" as const
      }),
    }),
  })
})

export const { useCreateProduitMutation, useGetProduitsQuery, useDeleteProduitMutation } = produitApi;