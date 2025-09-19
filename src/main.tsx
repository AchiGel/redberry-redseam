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
import { PrivateRoute } from "./routes/PrivateRoute.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Protected routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<App />}>
          <Route path="/" element={<ProductsPage />} />
        </Route>
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
