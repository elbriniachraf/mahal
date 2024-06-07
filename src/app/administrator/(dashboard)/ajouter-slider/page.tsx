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
import { useCreateSliderMutation, useLazyCreateSliderQuery } from '@/redux/features/slider/sliderApi';
import { toast } from 'sonner';


type Props = {}

const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
const schemaCreateSlider = yup.object().shape({
  titre: yup.string()
  .required('Veuillez saisir le titre de slider'),
  description: yup.string()
    .required('Veuillez saisir le description de slider'),
  url: yup.string().matches(URL, 'Enter a valid url')
    .required('Veuillez saisir link '),
  image:  yup.string().required('veuillez choisir l\'image de slider ')
})


const AddSlider = (props: Props) => {
  const [createSlider, { data, isLoading, isSuccess, isError, error  }] = useCreateSliderMutation();
  const formik = useFormik({
    initialValues: { 
      titre: '', 
      description: '', 
      url: '', 
      image: '', 
    },
    validationSchema: schemaCreateSlider,
    onSubmit: async (values, { resetForm }) => {
      createSlider(values)
      // resetForm();
    }
  })
  
  const { handleSubmit, errors, values, handleChange, touched } = formik;

  useEffect(() => {
    if (isSuccess) {
      const toastId = toast.loading("");
      toast.success("successfully create Slider", { id: toastId, duration: 1000 });
      formik.resetForm();
    }
    if (isError) {
      const toastId = toast.loading("");
      toast.error("SomeThing Error", { id: toastId, duration: 1000 });
    }
  }, [isLoading]);
  
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

export default AddSlider