import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../shared/components/layouts/MainLayout";
import Dashboard from "../features/dashboard/Dashboard";
import Task from "../features/task/Task";

export const Routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to={"dashboard"} replace /> },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path:"task",
        element:<Task/>
      }
    ],
  },
]);
