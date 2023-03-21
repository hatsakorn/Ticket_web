import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
