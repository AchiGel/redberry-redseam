export type ProductTypes = {
  id: number;
  name: string;
  description: string | null;
  release_year: string;
  cover_image: string;
  images: string[];
  price: number;
  available_colors: string[];
  available_sizes: string[] | null;
  brand: {
    id: number;
    name: string;
    image: string;
  };
  total_price: number;
  quantity: number;
  color: "Default";
  size: string;
};

export type Product = {
  id: number;
  name: string;
  description: string | null;
  release_year: string;
  cover_image: string;
  images: string[];
  price: number;
  available_colors: string[];
  available_sizes: string[] | null;
};

export type PaginationLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type PaginationLinks = {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
};

export type PaginationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type ProductsResponse = {
  data: Product[];
  links: PaginationLinks;
  meta: PaginationMeta;
};

export type UserType = {
  id: number;
  username: string;
  email: string;
  is_admin: number;
  remember_token: string | null;
  avatar: string | null;
};

export type AuthContextType = {
  user: UserType | null;
  token: string | null;
  loading: boolean;
  login: (user: UserType, token: string) => void;
  logout: () => void;
};

export type AuthResponse = {
  user: {
    id: number;
    username: string;
    email: string;
    is_admin: number;
    remember_token: string | null;
    avatar: string | null;
  };
  token: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  avatar?: File | null;
  email: string;
  password: string;
  password_confirmation: string;
  username: string;
};

export interface ProductsHeadingProps {
  totalProducts: number | undefined;
  from: number | undefined;
  to: number | undefined;
  filterIsOpened: boolean;
  setFilterIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  sortIsOpened: boolean;
  setSortIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  sort: string | undefined;
  setSort: (newSort: string | undefined) => void;
  filters: { price_from?: number; price_to?: number };
  setFilters: (newFilters: { price_from?: number; price_to?: number }) => void;
}

export interface ProductQueryParams {
  page?: number;
  sort?: string;
  filter?: {
    price_from?: number;
    price_to?: number;
  };
}

export type PaginationProps = {
  meta: {
    current_page: number;
    last_page: number;
  };
  onPageChange: (page: number) => void;
};
