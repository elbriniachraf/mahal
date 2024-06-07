'use client'

import React from 'react'

// import './Sliders.module.scss';
import PageContent from '@/components/pageContent/PageContent';
import DataTable from '@/components/ui/dataTable/DataTable';
import { columnsProduits } from '@/utils/table/table';
// import { useGetProduitsQuery } from '@/redux/features/produit/produitApi';

type Props = {}
interface IData{
  message: string;
  slider: object;
}

const produits = [
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
  {
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
]

const Produits = (props: Props) => {
  // const { data, isLoading, isError } = useGetProduitsQuery(0);
  
  return (
    <PageContent heading='Produits'>
      <DataTable columns={columnsProduits} data={produits} />
    </PageContent>
  )
}

export default Produits