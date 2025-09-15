import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import UserList from "../UserList";
import PrivateRoute from "../components/PrivateRoute";
import Account from "../pages/Account";

export const appRoutes = [
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
