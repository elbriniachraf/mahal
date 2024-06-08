'use client'

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TbCloudUpload } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
import { Row, Col } from 'react-bootstrap'


import Classes from './ajouterProduit.module.scss';
import PageContent from '@/components/pageContent/PageContent';
import Input, { RadioButton, SelectOption } from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';
import Image from 'next/image';
import { useGetCategoriesQuery } from '@/redux/features/categorie/categorieApi';
import SelectImage, { DisplayImage } from '@/components/ui/image/ImageWrapper';
import { toast } from 'sonner';
import { useCreateProduitMutation, useGetProduitQuery, useUpDateProduitMutation } from '@/redux/features/produit/produitApi';
import { IProduit, initialProduit } from '@/utils/interfaces';
import { useRouter } from 'next/navigation';
// import { useCreateProduitMutation } from '@/redux/features/produit/produitApi';


type Props = {}
const schemaCreateProduit = yup.object().shape({
  titre: yup.string()
    .required('Veuillez saisir le titre de produit'),
  slug: yup.string()
    .required('Veuillez saisir le slug de produit'),
  status: yup.string()
    .required('Veuillez saisir status de produit '),
  description:  yup.string().required('Veuillez description le slug de produit'),
  shortDescription:  yup.string().required('Veuillez description le slug de produit'),
  price:  yup.string().required('veuillez saisir le prix de produit '),
  images:  yup.mixed().required('File is required'),
  categorie:  yup.string().required('veuillez le categorie de produit '),
})


const EditProduit = ({ params }: { params: { id: string } }) => {
  const [produit, setProduit] = useState<IProduit>(initialProduit);
  const router = useRouter();
  const { data, isLoading, isSuccess, isError, error  } = useGetProduitQuery(params.id);
  console.log(data)
  const { data: dataCategories } = useGetCategoriesQuery();
  const [updateProduit, { 
    data: Produits, 
    isLoading: isLoadingProduits, 
    isSuccess: isSuccessProduits, 
    isError: isErrorProduits  
  }] = useUpDateProduitMutation();
  
  useEffect(()=>{
    if(isSuccess){
      setProduit(data.product)
    }
  },[isLoading, data])
  
  useEffect(()=>{
    if (isSuccessProduits) {
      const toastId = toast.loading("");
      toast.success("successfully upDate Produit", { id: toastId, duration: 1000 });
      formik.resetForm();
      router.push('/administrator/produits')
    }
    if (isErrorProduits) {
      const toastId = toast.loading("");
      toast.error("SomeThing Error", { id: toastId, duration: 1000 });
    }
  },[isLoadingProduits])

  const formik = useFormik({
    initialValues: { 
      titre: produit.name, 
      slug: produit.slug, 
      status: 'no publish', 
      description: produit.description, 
      shortDescription: produit.shortDescription, 
      price: produit.price, 
      images: [], 
      categorie: 48
    },
    validationSchema: schemaCreateProduit,
    onSubmit: async (values, { resetForm }) => {
      updateProduit(values)
    }
  })
  const { handleSubmit, errors, values, handleChange, touched } = formik;
  console.log(errors)
  
  const handelDeleteImage = (i: number) => {
    let productImages: string[] = Array.from(formik.values.images);
    productImages = productImages.filter((img, index) => index !== i)
    formik.setFieldValue('image', productImages);
    console.log(i)
  }
  const handleRadioButton = (e: any) => {
    formik.setFieldValue('status', e.target.value);
  }
  
  const storeImage = (image: string) => {
    let productImages: string[] = Array.from(formik.values.images);
    productImages.push(image)
    formik.setFieldValue('images', productImages);
    console.log(formik.values.images)
  }

  useEffect(() => {
    if (isSuccess) {
      const toastId = toast.loading("");
      toast.success("successfully create categorie", { id: toastId, duration: 1000 });
      formik.resetForm();
    }
    if (isError) {
      const toastId = toast.loading("");
      toast.error("SomeThing Error", { id: toastId, duration: 1000 });
    }
  }, [isLoading]);

  const handleUrlSlug = (titre: string) => {
    const convertTitre = titre.trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
    formik.setFieldValue('slug', `https://www.mahalat.ma/${convertTitre}`);
  }
  const handleTitleBlur = () => {
    handleUrlSlug(values.titre)
  }

  return (
    <PageContent heading='Ajouter Produit'>
      <form className={Classes['form-create-produit']} onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Input 
              type='text' 
              id='titre' 
              label='Titre'
              placeHolder='Veuillez saisir le titre de produit' 
              error={errors.titre} 
              value={values.titre}
              onChange={handleChange}
              touched={touched.titre}
              onBlur={handleTitleBlur}
            />
          </Col>
          <Col xs={12} md={6} xxl={3}>
            <SelectOption 
              label='Categorie' 
              selectData={dataCategories?.categories || []} 
              onChange={handleChange} 
              id='categorie'
              value={values.categorie}
            />
          </Col>
          <Col xs={12} md={6} xxl={3}>
            {/* <Input 
              type='text' 
              id='status' 
              label='status'
              placeHolder='Veuillez saisir status' 
              error={errors.status} 
              value={values.status}
              onChange={handleChange}
              touched={touched.status}
            /> */}
            <RadioButton label='Status' radioData={['publish', 'no publish']} onChange={handleRadioButton} value={values.status} />
          </Col>
          <Col>
            <Input 
              type='text' 
              id='slug' 
              label='Slug'
              placeHolder='Slug' 
              value={values.slug}
              disabled
            />
          </Col>
          <Col md={12} xl={12} xxl={6 }>
            <Input 
              type='number' 
              id='price' 
              label='price'
              placeHolder='Veuillez saisir price' 
              error={errors.price} 
              value={values.price}
              onChange={handleChange}
              touched={touched.price}
            />
          </Col>
          <Col md={12} xl={12} xxl={8}>
            <Input 
              type='text' 
              id='description' 
              label='description'
              placeHolder='Veuillez saisir description' 
              error={errors.description} 
              value={values.description}
              onChange={handleChange}
              touched={touched.description}
              as='textarea'
            />
          </Col>
          <Col md={12} xxl={4}>
            <Input 
              type='text' 
              id='shortDescription' 
              label='Short Description'
              placeHolder='Veuillez saisir Short description' 
              error={errors.shortDescription} 
              value={values.shortDescription}
              onChange={handleChange}
              touched={touched.shortDescription}
              as='textarea'
            />
          </Col>
        </Row>
        <Row  xs={1} md={2} xl={3} xxl={5} style={{gap: '26px 0px'}}>
          {
            formik.values.images.map((img, index) => <DisplayImage key={index} image={img} deleteImage={()=>handelDeleteImage(index)} />)
          }
          <Col>
            <SelectImage storeImage={storeImage}/>
          </Col>
        </Row>
        <div className={Classes['button-content']}>
          <Button type='submit' content='Ajouter Produit' isLoading={false} />
        </div>
      </form>
    </PageContent>
  )
}

export default EditProduit