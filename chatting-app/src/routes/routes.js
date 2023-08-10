import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const route = [
  {
    pathName: "/",
    element: <Login />,
  },
  {
    pathName: "/registration",
    element: <Registration />,
  },
  {
    pathName: "/dashboard",
    element: <Dashboard />,
  },
];
