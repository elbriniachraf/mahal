import { useEffect, useState } from "react";

import {
  ColumnDef,
  flexRender,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from "@tanstack/react-table";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import Modal from '@/components/ui/modal/Modal'
import Classes from './table.module.scss';
import { useDeleteProduitMutation } from "@/redux/features/produit/produitApi";
import { useDeleteCategorieMutation } from "@/redux/features/categorie/categorieApi";
import { useDeleteSliderMutation } from "@/redux/features/slider/sliderApi";



export type Sliders = {
  id: string
  Title: string
  Ratings: "pending" | "processing" | "success" | "failed"
  Purchased: string
  CreatedAt: string
  actions: any
  image_cloudinary: string
}
export const columnsSliders: ColumnDef<Sliders>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const { image_cloudinary } = row.original;
      console.log(row.original)
      return(
        <>
          <Image src={image_cloudinary} width={50} height={50} alt='Slider Image' />
        </>
      )
    }
  },
  {
    accessorKey: "titre",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Titre
        </button>
      )
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Description
        </button>
      )
    },
  },
  {
    accessorKey: "url",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Url
        </button>
      )
    },
  },
  {
    id: 'actions',
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const {image_cloudinary, id} = row.original;
      const [isModalShow, setIsModalShow] = useState(false);
      const [deleteSlider, {data, isError, isSuccess, isLoading}] = useDeleteSliderMutation();

      const handleDeleteSlider = ()=> {
        deleteSlider(id);
      }
      useEffect(()=>{
        if (isSuccess) {
          const toastId = toast.loading("");
          toast.success("successfully Delete Slider", { id: toastId, duration: 1000 });
          setIsModalShow(false)
        }
        if (isError) {
          const toastId = toast.loading("");
          toast.error("SomeThing Error", { id: toastId, duration: 1000 });
        }
      },[ isLoading ])
      
      return(
        <>
          <Link href={`/edit-slider/${id}`} className={Classes['table-button__cell']}><TiEdit /></Link>
          <button className={Classes['table-button__cell']} onClick={() => setIsModalShow(true)}><MdDelete /></button>
          <Modal isShow={isModalShow} setShow={setIsModalShow} deleteFunction={handleDeleteSlider}/>
        </>
      )
    }
  }
]

export type ICategorie = {
  id: string
  titre: string
  slug: "pending" | "processing" | "success" | "failed"
  status: string
  description: string
  prix: string
  image_cloudinary: string
  actions: any
}
export const columnsCategories: ColumnDef<ICategorie>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const {image_cloudinary} = row.original;
      return(
        <>
          <Image src={image_cloudinary} width={50} height={50} alt='categorie image' />
        </>
      )
    }
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Titre
        </button>
      )
    },
  },
  {
    accessorKey: "slug",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Slug
        </button>
      )
    },
  },
  {
    accessorKey: "count",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Count
        </button>
      )
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Description
        </button>
      )
    },
  },
  {
    id: 'actions',
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const {id} = row.original;
      const [isModalShow, setIsModalShow] = useState(false);
      const [deleteCategorie, {data, isError, isSuccess, isLoading}] = useDeleteCategorieMutation();

      useEffect(() => {
        if (isSuccess) {
          const toastId = toast.loading("");
          toast.success("successfully create categorie", { id: toastId, duration: 1000 });
        }
        if (isError) {
          const toastId = toast.loading("");
          toast.error("SomeThing Error", { id: toastId, duration: 1000 });
        }
      }, [isLoading]);

      const handleDeleteCategorie = ()=> {
        deleteCategorie(id);
      }
      
      return(
        <>
          <Link href={`/edit-categorie/${id}`} className={Classes['table-button__cell']}><TiEdit /></Link>
          <button className={Classes['table-button__cell']} onClick={() => setIsModalShow(true)}><MdDelete /></button>
          <Modal isShow={isModalShow} setShow={setIsModalShow} deleteFunction={handleDeleteCategorie}/>
        </>
      )
    }
  }
]

export type IProduit = {
  _id: string
  titre: string
  slug: "pending" | "processing" | "success" | "failed"
  status: string
  description: string
  prix: number
  image: string
  shortDescription: string
  categorie: string
  actions: any
}
export const columnsProduits: ColumnDef<IProduit>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const { image } = row.original;
      return(
        <>
          <Image src={`/imgs/${image}`} width={50} height={50} alt='user profile' />
        </>
      )
    }
  },
  {
    accessorKey: "titre",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Titre
        </button>
      )
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Description
        </button>
      )
    },
  },
  {
    accessorKey: "shortDescription",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Short Description
        </button>
      )
    },
  },
  {
    accessorKey: "categorie",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Categorie
        </button>
      )
    },
  },
  {
    accessorKey: "slug",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Slug
        </button>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Status
        </button>
      )
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={Classes['table-button__header']}
        >
          Prix
        </button>
      )
    },
  },
  {
    id: 'actions',
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const Payment = row.original;
      const [isModalShow, setIsModalShow] = useState(false);
      // const [de] = useDeleteProduitMutation();
      
      return(
        <>
          <button className={Classes['table-button__cell']} onClick={() => setIsModalShow(true)}><TiEdit /></button>
          <button className={Classes['table-button__cell']} onClick={() => setIsModalShow(true)}><MdDelete /></button>
          <Modal isShow={isModalShow} setShow={setIsModalShow} />
        </>
      )
    }
  }
]