import { Nullable } from 'shared/types/global';

export interface IUser {
  id: number;
  is_online: boolean;
  rate: number;
  reviews: number;
  name: string;
  created_at: number;
  avatar: string;
}

export interface IOffer {
  id: number;
  text: string;
  count: Nullable<number>;
  price: number;
  category: string;
  delivery_status: string;
  is_pinned: boolean;
  is_instant_delivery: boolean;
  user: IUser;
}

export interface FiltersValues {
  category: string;
  search: string;
  delivery_status: string;
  is_instant_delivery: boolean;
  is_online: boolean;
}
