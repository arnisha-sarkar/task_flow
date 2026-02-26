import Home from "../pages/Home";
import Dashboard from "../Components/Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Tasks from "../pages/Tasks";
import { createBrowserRouter } from "react-router";

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
        path: "tasks",
        element: (
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
