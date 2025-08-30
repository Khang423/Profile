import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authApi";
<<<<<<< HEAD
import { message } from "antd";
=======
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [errors, setErrors] = useState({});
=======
  const [error, setError] = useState("");
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======
    setError("");
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412
    setLoading(true);

    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
<<<<<<< HEAD
      console.log();
      if (err.response?.data?.errors) {
        const fieldErrors = {};
        err.response.data.errors.forEach((error) => {
          fieldErrors[error.path] = error.msg; // map theo field
        });
        console.log(setErrors(fieldErrors));
      } else if (err.response?.data?.message) {
        setErrors({ message: err.response?.data?.message });
      }
=======
      console.error(err);
      setError(err.response?.data?.message || "Đăng nhập thất bại");
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Đăng nhập</h1>
<<<<<<< HEAD

=======
        {error && (
          <div className="mb-3 rounded bg-red-100 p-2 text-sm text-red-600">
            {error}
          </div>
        )}
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border p-2"
          />
<<<<<<< HEAD
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
=======
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border p-2"
          />
<<<<<<< HEAD
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
=======
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            {loading ? "Đang xử lý..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
