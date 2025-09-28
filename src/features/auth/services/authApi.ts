import { API_URL } from "../../../main";
import type {
  LoginData,
  AuthResponse,
  RegisterData,
  ValidationErrors,
  ApiError,
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
    throw new Error("Incorrect Email or Password");
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
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (!response.ok) {
    let errorData: { message?: string; errors?: ValidationErrors } = {};
    try {
      errorData = await response.json();
    } catch {
      errorData = { message: "Registration failed" };
    }
    const error: ApiError = new Error(
      errorData.message || "Registration failed"
    );
    error.status = response.status;
    error.errors = errorData.errors;
    throw error;
  }

  return await response.json();
};
