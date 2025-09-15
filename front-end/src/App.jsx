import { BrowserRouter, useRoutes } from "react-router-dom";
import { appRoutes } from "./routes/ApprRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppRoutesWrapper = () => {
  return useRoutes(appRoutes);
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutesWrapper />
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};
export default App;
