'use client';

import React from 'react'

// import './Sliders.module.scss';
import PageContent from '@/components/pageContent/PageContent';
import DataTable from '@/components/ui/dataTable/DataTable';
import { columnsCategories } from '@/utils/table/table';
import { useGetCategoriesQuery } from '@/redux/features/categorie/categorieApi';

type Props = {}
interface IData{
  message: string;
  slider: object;
}
const categories = [
  {
    _id: 1,
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg',
    price: 10
  },
]

const Categories = (props: Props) => {
  const { data, isLoading, isError } = useGetCategoriesQuery(0);
  console.log(data)
  
  return (
    <PageContent heading='Categories'>
      <DataTable columns={columnsCategories} data={data?.categories || []} />
    </PageContent>
  )
}

export default Categories