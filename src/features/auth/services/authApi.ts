import { API_URL } from "../../../main";

export type LoginResponse = {
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

type LoginData = {
  email: string;
  password: string;
};

export const loginApi = async (data: LoginData): Promise<LoginResponse> => {
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

  return response.json();
};
