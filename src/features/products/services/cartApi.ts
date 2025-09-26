import { API_URL } from "../../../main";

export const getCartItems = async (token: string | null) => {
  try {
    const response = await fetch(`${API_URL}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch cart items:", error);
    throw error;
  }
};
