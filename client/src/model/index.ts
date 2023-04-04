export interface TreatmentProps {
  _id?: string;
  title?: string;
  slug?: string;
  desc?: string;
  imageUrl?: string;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  details?: [
    {
      title?: string;
      desc?: string;
      price?: number;
      _id?: number;
    }
  ];
  content?: string;
  __v?: number;
}

export interface OrderProps {
  _id?: string;
  user_id?: string;
  items?: [
    {
      product?: string;
      qty?: number;
      price?: number;
      _id?: string;
    }
  ];
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface ProductProps {
  _id?: string;
  title?: string;
  desc?: string;
  slug?: string;
  oldPrice?: number;
  newPrice?: number;
  featured?: boolean;
  size?: [string];
  productInfo?: string;
  ingredients?: string;
  shippingInfo?: [string];
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface BlogProps {
  _id?: string;
  user_id?: string;
  title?: string;
  slug?: string;
  tag?: string;
  imageUrl?: string;
  content?: string;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface UserProps {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  orders?: [string];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
