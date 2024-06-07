'use client'

import React, { useEffect, useState } from 'react'

import Classes from './image.module.scss';
import { Col } from 'react-bootstrap';
import Image from 'next/image';
import { TiDelete } from 'react-icons/ti';
import { TbCloudUpload } from 'react-icons/tb';

type Props = {
  formik?: any;
  storeImage?: (image: any) => void;
  image?: any;
  deleteImage?: any;
}

const SelectImage = ({
  formik,
  storeImage
}: Props) => {
  const [dragging, setDragging] = useState(false)

  const handelFileChange = (e: any) => {
    // e.preventDefault();
    let file = e.target.files[0];
    
    formik.setFieldValue('image', file);
  }
  const handelDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
    console.log(dragging)
  }
  const handelDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
    console.log(dragging)
  }
  const handelDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if(file){
      let fileReader = new FileReader(); 
      fileReader.readAsDataURL(file); 
      fileReader.onload = function() {
        if(fileReader.readyState === 2){
          if(storeImage){
            storeImage(fileReader.result)
          }
        }else{
          formik.setFieldValue('image', fileReader.result);
        }
      };
    }
  }
  
  // if(formik)
  // const { errors, touched } = formik;

  return (
    <Col>
      <div className={Classes['img-content']}>
        <input
          type='file' 
          id='image'
          name='image'
          style={{display: 'none'}}
          onChange={handelFileChange}
        />
        <label htmlFor='image' className={` ${dragging && Classes.dragging}`}
          onDragOver={handelDragOver}
          onDragLeave={handelDragLeave}
          onDrop={handelDrop}
        >
          <TbCloudUpload />
          <p>Drop your images here or select <span> click to browser</span></p>
        </label>
        {/* {errors.image && touched.image && (<p>{ errors.image }</p>) } */}
      </div>
    </Col>
  )
}

export default SelectImage

export const DisplayImage = ({
  formik,
  image,
  deleteImage
}: Props) => {
  const [img, setImg] = useState('')
  const handelDeleteImage = () => {
    if(deleteImage){
      deleteImage();
    }else{
      formik.setFieldValue('image', '');
    }
  }

  // let img: string;
  useEffect(()=> {
    if(formik.values.image){
      if(typeof formik.values.image === 'string'){
        setImg(formik.values.image);
      }else{
        console.log(img)
        let fileReader = new FileReader();
        fileReader.readAsDataURL(formik.values.image)
        fileReader.onload = () => {
          if(fileReader.readyState  === 2){
            setImg(fileReader.result);
          }
        }
        console.log(img)
      }
    }
    console.log(formik.values)
  }, [formik])

  return (
    <Col>
      <div className={Classes['img-content']}>
        <label htmlFor='url' className={Classes['select-image']}
        >
          <Image 
            src={img} 
            alt='Categorie image' 
            width={'100'}
            height={'100'}
          />
          <span className={Classes.icon} onClick={handelDeleteImage}><TiDelete /></span>
        </label>
      </div>
    </Col>
  )
}