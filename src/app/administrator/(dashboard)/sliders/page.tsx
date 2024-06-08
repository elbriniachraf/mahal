'use client'

import React from 'react'

import './Sliders.module.scss';
import PageContent from '@/components/pageContent/PageContent';
import DataTable from '@/components/ui/dataTable/DataTable';
import { columnsSliders } from '@/utils/table/table';
import { useGetSlidersQuery } from '@/redux/features/slider/sliderApi';

type Props = {}
interface IData{
  message: string;
  slider: object;
}

const Sliders = (props: Props) => {
  const { data, isLoading, isError } = useGetSlidersQuery(0);
  console.log(data)

  
  return (
    <PageContent heading='Sliders'>
      <DataTable columns={columnsSliders} data={data?.slider || []} />
      {/* <h1>Siders</h1> */}
    </PageContent>
  )
}

export default Sliders