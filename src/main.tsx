import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.tsx";
import LoginPage from "./features/auth/pages/LoginPage.tsx";
import RegisterPage from "./features/auth/pages/RegisterPage.tsx";
import ProductsPage from "./features/products/pages/ProductsPage.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import ProductDetailPage from "./features/products/pages/ProductDetailPage.tsx";

export const API_URL = "https://api.redseam.redberryinternship.ge/api";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<App />}>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/:id" element={<ProductDetailPage />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
