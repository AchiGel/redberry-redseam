import { API_URL } from "../../../main";

export const getCartItems = async (token: string | null) => {
  if (!token) throw new Error("Token is required");

  const response = await fetch(`${API_URL}/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch cart items: ${response.status}`);
  }

  return response.json();
};

export const postCartItems = async (
  token: string | null,
  id: string,
  data: { quantity: number; color: string; size: string }
) => {
  if (!token) throw new Error("Token is required");

  const response = await fetch(`${API_URL}/cart/products/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to add item to cart: ${response.status}`);
  }

  return response.json();
};

export const patchCartItems = async (
  token: string | null,
  id: string,
  quantity: number
) => {
  if (!token) throw new Error("Token is required");

  const response = await fetch(`${API_URL}/cart/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ quantity }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update cart item: ${response.status}`);
  }

  return response.json();
};

export const deleteCartItems = async (token: string | null, id: string) => {
  if (!token) throw new Error("Token is required");

  const response = await fetch(`${API_URL}/cart/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete cart item: ${response.status}`);
  }

  return response.json();
};

export const cartCheckout = async (
  token: string | null,
  data: {
    name: string;
    surname: string;
    email: string;
    zip_code: string;
    address: string;
  }
) => {
  if (!token) throw new Error("Token is required");

  const response = await fetch(`${API_URL}/cart/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to checkout: ${response.status}`);
  }

  return response.json();
};
