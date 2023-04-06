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

export interface initiateTransactionProps {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface GetTransactionProps {
  status: boolean;
  message: string;
  data: TransactionData;
}

export interface TransactionData {
  id: number;
  domain: string;
  status: string;
  reference: string;
  amount: number;
  message: null;
  gateway_response: string;
  paid_at: null;
  created_at: Date;
  channel: string;
  currency: string;
  ip_address: string;
  metadata: string;
  log: null;
  fees: null;
  fees_split: null;
  authorization: {};
  customer: Customer;
  plan: null;
  split: {};
  order_id: null;
  paidAt: null;
  createdAt: Date;
  requested_amount: number;
  pos_transaction_data: null;
  source: null;
  fees_breakdown: null;
  transaction_date: Date;
  plan_object: {};
  subaccount: {};
}

export interface Customer {
  id: number;
  first_name: null;
  last_name: null;
  email: string;
  customer_code: string;
  phone: null;
  metadata: null;
  risk_action: string;
  international_format_phone: null;
}
