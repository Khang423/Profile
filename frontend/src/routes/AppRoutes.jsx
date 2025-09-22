import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import UserList from "../UserList";
import PrivateRoute from "../components/PrivateRoute";
import Account from "../pages/admin/Account";
import Home from "../pages/user/Home";

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/account",
    element: (
      <PrivateRoute>
        <Account />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/userList",
    element: (
      <PrivateRoute>
        <UserList />
      </PrivateRoute>
    ),
  },
];
