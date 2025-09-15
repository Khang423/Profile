import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Bạn cần đăng nhập trước"); // hiện thông báo
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default PrivateRoute;
