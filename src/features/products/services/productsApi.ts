import { API_URL } from "../../../main";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
