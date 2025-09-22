import { API_URL } from "../../../main";
import type {
  LoginData,
  AuthResponse,
  RegisterData,
} from "../../../types/types";

export const loginApi = async (data: LoginData): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return await response.json();
};

export const registerApi = async (
  data: RegisterData
): Promise<AuthResponse> => {
  const formData = new FormData();
  if (data.avatar) formData.append("avatar", data.avatar);
  formData.append("email", data.email);
  formData.append("username", data.username);
  formData.append("password", data.password);
  formData.append("password_confirmation", data.password_confirmation);

  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return await response.json();
};
