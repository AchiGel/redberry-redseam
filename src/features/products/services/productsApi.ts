import { API_URL } from "../../../main";

interface ProductQueryParams {
  page?: number;
  sort?: string;
  filter?: {
    price_from?: number;
    price_to?: number;
  };
}

export const getAllProducts = async (params: ProductQueryParams = {}) => {
  try {
    const query = new URLSearchParams();

    if (params.page) query.set("page", params.page.toString());
    if (params.sort) query.set("sort", params.sort);

    if (params.filter) {
      Object.entries(params.filter).forEach(([key, value]) => {
        if (value !== undefined) {
          query.set(`filter[${key}]`, String(value));
        }
      });
    }

    const response = await fetch(`${API_URL}/products?${query.toString()}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
