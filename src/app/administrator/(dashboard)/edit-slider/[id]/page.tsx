'use client'

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Classes from './ajouterSlide.module.scss';
import PageContent from '@/components/pageContent/PageContent';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';
import Image from 'next/image';
import SelectImage, { DisplayImage } from '@/components/ui/image/ImageWrapper';
import { useCreateSliderMutation, useGetSliderMutation, useLazyCreateSliderQuery, useUpDateSliderMutation } from '@/redux/features/slider/sliderApi';
import { ISlider, initialSlider } from '@/utils/interfaces';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


type Props = {}
const schemaUpdateSlider = yup.object().shape({
  heading: yup.string()
    .required('Veuillez saisir le titre de slider'),
  description: yup.string()
    .required('Veuillez saisir le description de slider'),
  url: yup.string()
    .required('Veuillez saisir link '),
  image:  yup.string().required('veuillez choisir l\'image de slider ')
})

const sliders = [
  {
    _id: 1,
    titre: 'On Trending',
    description: 'Perfect Fashion Unique Dress',
    url: 'https://222222.com',
    image: 'product.jpg'
  },
]

const EditSlider = ({params}: { params: { id: string } }) => {  
  const [slider, setSlider] = useState<ISlider>(initialSlider);
  const router = useRouter();
  const { data, isLoading, isSuccess, isError, error  } = useGetSliderMutation(params.id);
  const [updateCategorie, { 
    data: dataUpdateSlider, 
    isLoading: isLoadingSlider, 
    isSuccess: isSuccessSlider, 
    isError: isErrorSlider  
  }] = useUpDateSliderMutation();
  
  useEffect(()=>{
    if(isSuccess){
      setSlider(data.category)
    }
  },[isLoading, data])
  
  useEffect(()=>{
    if (isSuccessSlider) {
      const toastId = toast.loading("");
      toast.success("successfully upDate categorie", { id: toastId, duration: 1000 });
      formik.resetForm();
      router.push('/sliders')
    }
    if (isErrorSlider) {
      const toastId = toast.loading("");
      toast.error("SomeThing Error", { id: toastId, duration: 1000 });
    }
  },[isLoadingSlider])

  const formik = useFormik({
    initialValues: { 
      titre: slider?.titre, 
      description: slider?.description, 
      url: slider?.url, 
      image: slider?.image,
    },
    enableReinitialize: true,
    validationSchema: schemaUpdateSlider,
    onSubmit: async (values, { resetForm }) => {
      updateCategorie({...values, id: params.id})
    }
  })
  const { handleSubmit, errors, values, handleChange, touched } = formik;
  
  return (
    <PageContent heading='Ajouter Slider'>
      <form className={Classes['form-create-slider']} onSubmit={handleSubmit}>
        <Input 
          type='text' 
          id='titre' 
          label='titre'
          placeHolder='Veuillez saisir le titre de slider' 
          error={errors.titre} 
          value={values.titre}
          onChange={handleChange}
          touched={touched.titre}
        />
        <Input 
          type='text' 
          id='description' 
          label='Description'
          placeHolder='Veuillez saisir le description de slider' 
          error={errors.description} 
          value={values.description}
          onChange={handleChange}
          touched={touched.description}
        />
        <Input 
          type='text' 
          id='url' 
          label='Url'
          placeHolder='Veuillez saisir url' 
          error={errors.url} 
          value={values.url}
          onChange={handleChange}
          touched={touched.url}
        />
        {formik.values.image === '' ? <SelectImage formik={formik} /> : <DisplayImage formik={formik} />}
        
        <div className={Classes['button-content']}>
          <Button type='submit' content='Ajouter Slider' isLoading={false} />
        </div>
      </form>
    </PageContent>
  )
}

export default EditSlider