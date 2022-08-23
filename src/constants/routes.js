import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";

export const routes = [
  {
    path: "/",
    Component: Dashboard,
    isPublic: false,
    exact: false,
  },
  {
    path: "/login",
    Component: Login,
    isPublic: true,
    exact: true,
  },
];
