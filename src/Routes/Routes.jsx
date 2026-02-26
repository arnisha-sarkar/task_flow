import Home from "../pages/Home";
import Dashboard from "../Components/Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router";
import Analytics from "../pages/Analytics";
import Overview from "../pages/Overview";
import Users from "../pages/Users";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "overview",
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <PrivateRoute>
            <Analytics />
          </PrivateRoute>
        ),
      },
      {
        path: "products",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
