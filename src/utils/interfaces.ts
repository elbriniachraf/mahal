
export interface ICategorie {
  id?: string;
  name: string;
  description: string;
  slug: string;
  count: number;
  image: any;
  image_cloudinary?: any;
}
export const initialCategory = {
  id: '',
  name: '',
  description: '',
  slug: '',
  count: '',
  image: '',
}

export interface ISlider {
  id: string;
  titre: string;
  description: string;
  url: string;
  image: string;
}
export const initialSlider = {
  id: '',
  titre: '',
  description: '',
  url: '',
  image: ''
}

export interface IProduit {
  titre: string;
  description: string;
  shortDescription: string;
  slug: string;
  status: string;
  images: [];
  categorie: string;
  price: number;
}

export const initialProduit =  {
  titre: '',
  description: '',
  shortDescription: '',
  slug: '',
  status: 'no publish',
  images: [],
  categorie: 1,
  price: 0
}