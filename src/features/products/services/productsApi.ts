import { API_URL } from "../../../main";

export const getAllProducts = async (page: number = 1) => {
  try {
    const response = await fetch(`${API_URL}/products?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
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
