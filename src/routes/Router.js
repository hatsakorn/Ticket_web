import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import HelpPage from "../pages/HelpPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SettingPage from "../pages/SettingPage";
import TicketPage from "../pages/TicketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/ticket",
        element: <TicketPage />,
      },
      {
        path: "/setting",
        element: <SettingPage />,
      },
      {
        path: "/help",
        element: <HelpPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
