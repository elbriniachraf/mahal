'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Row, Col } from 'react-bootstrap';
import { TbCloudUpload } from 'react-icons/tb';
import { TiDelete } from 'react-icons/ti';
import Image from 'next/image';

import Classes from './ajouterCategorie.module.scss';
import PageContent from '@/components/pageContent/PageContent';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';
import { useGetCategorieQuery, useGetCategoriesQuery, useUpDateCategorieMutation } from '@/redux/features/categorie/categorieApi';
import SelectImage, { DisplayImage } from '@/components/ui/image/ImageWrapper';
import { ICategorie, initialCategory } from '@/utils/interfaces';

const schemaCreateCategorie = yup.object().shape({
  name: yup.string()
    .required('Veuillez saisir le titre de categorie'),
  slug: yup.string(),
    description:  yup.string().required('Veuillez description le slug de categorie'),
  image:  yup.string().required('veuillez choisir l\'image de categorie '),
  count: yup.number()
  .required('Veuillez saisir status de categorie '),
})

const EditCategorie = ({ params }: { params: { id: string } }) => {
  const [categorie, setCategorie] = useState<ICategorie>(initialCategory);
  const router = useRouter();
  const { data, isLoading, isSuccess, isError, error  } = useGetCategorieQuery(params.id);
  const [updateCategorie, { 
    data: categories, 
    isLoading: isLoadingCategories, 
    isSuccess: isSuccessCategories, 
    isError: isErrorCategories  
  }] = useUpDateCategorieMutation();
  
  useEffect(()=>{
    if(isSuccess){
      setCategorie(data.category)
    }
    console.log(categorie);
  },[isLoading, data])
  
  useEffect(()=>{
    if (isSuccessCategories) {
      const toastId = toast.loading("");
      toast.success("successfully upDate categorie", { id: toastId, duration: 1000 });
      formik.resetForm();
      router.push('/categories')
    }
    if (isErrorCategories) {
      const toastId = toast.loading("");
      toast.error("SomeThing Error", { id: toastId, duration: 1000 });
    }
  },[isLoadingCategories])

  const formik = useFormik({
    initialValues: { 
      name: categorie.name, 
      slug: categorie.slug, 
      description: categorie.description, 
      image: categorie.image_cloudinary, 
      count: categorie.count, 
    },
    enableReinitialize: true,
    validationSchema: schemaCreateCategorie,
    onSubmit: async (values, { resetForm }) => {
      updateCategorie({...values, id: params.id})
    }
  })
  const { handleSubmit, errors, values, handleChange, touched } = formik;

  return (
    <PageContent heading='Edit Categorie'>
      <form className={Classes['form-create-categorie']} onSubmit={handleSubmit}>
        <Row  xs={1} md={3} lg={3}>
          <Col>
            <Input 
              type='text' 
              id='name' 
              label='Titre'
              placeHolder='Veuillez saisir le titre de Categorie' 
              error={errors.name} 
              value={values.name}
              onChange={handleChange}
              touched={touched.name}
            />
          </Col>
          <Col>
            <Input 
              type='number' 
              id='count' 
              label='Count'
              placeHolder='Veuillez saisir le count de Categorie' 
              error={errors.count} 
              value={values.count}
              onChange={handleChange}
              touched={touched.count}
            />
          </Col>
          <Col>
            <Input 
              type='text' 
              id='slug' 
              label='Slug'
              placeHolder='http://Slug.categorie' 
              error={errors.slug} 
              value={values.slug}
              onChange={handleChange}
              touched={touched.slug}
              disabled
            />
          </Col>
          <Input 
            type='text' 
            id='description' 
            label='description'
            placeHolder='Veuillez saisir description' 
            error={errors.description} 
            value={values?.description}
            onChange={handleChange}
            touched={touched.description}
            as='textarea'
          />
        </Row>
        {formik.values.image === '' ? <SelectImage formik={formik} /> : <DisplayImage formik={formik} />  }
        
        <div className={Classes['button-content']}>
          <Button type='submit' content='Up Date' isLoading={false} />
        </div>
      </form>
    </PageContent>
  )
}

export default EditCategorie