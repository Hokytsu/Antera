import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

// Pages Imports
import App from "./App.tsx";
import Home from "./pages/home/Home.tsx";
import NotFindPage from "./pages/404/404.tsx";
import ContaineRouter from "./pages/router/Router.tsx";
import Sobre from "./pages/sobre/Sobre.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFindPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Sobre",
        element: <Sobre />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
