'use client'

import { useFormik } from 'formik';
import { useEffect } from 'react';
import { toast } from "sonner";
import Image from 'next/image';
import * as yup from 'yup';
import { TbCloudUpload } from 'react-icons/tb';
import { TiDelete } from 'react-icons/ti';
import { Row, Col } from 'react-bootstrap'

import Classes from './ajouterCategorie.module.scss';
import PageContent from '@/components/pageContent/PageContent';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';
import { useCreateCategorieMutation } from '@/redux/features/categorie/categorieApi';
import SelectImage, { DisplayImage } from '@/components/ui/image/ImageWrapper';


type Props = {}
const schemaCreateCategorie = yup.object().shape({
  name: yup.string()
    .required('Veuillez saisir le titre de categorie'),
  slug: yup.string(),
  description:  yup.string().required('Veuillez description le slug de categorie'),
  image:  yup.mixed().required('File is required'),
  count: yup.number()
  .required('Veuillez saisir status de categorie '),
})


const AddCategorie = (props: Props) => {
  const [createCategorie, { data, isLoading, isSuccess, isError, error  }] = useCreateCategorieMutation();
  const formik = useFormik({
    initialValues: { 
      name: '', 
      slug: '', 
      description: '', 
      image: '', 
      count: 0, 
    },
    validationSchema: schemaCreateCategorie,
    onSubmit: async (values, { resetForm }) => {
      createCategorie(values)
    }
  })
  const { handleSubmit, errors, values, handleChange, touched } = formik;
  
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
    handleUrlSlug(values.name)
  }
  
  
  return (
    <PageContent heading='Ajouter Categorie'>
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
              onBlur={handleTitleBlur}
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
              placeHolder='http://www.mahalat.ma/' 
              value={values.slug}
              disabled
            />
          </Col>
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
        </Row>
        {formik.values.image === '' ? <SelectImage formik={formik} /> : <DisplayImage formik={formik} />  }
        <div className={Classes['button-content']}>
          <Button type='submit' content='Ajouter Categorie' isLoading={false} />
        </div>
      </form>
    </PageContent>
  )
}

export default AddCategorie