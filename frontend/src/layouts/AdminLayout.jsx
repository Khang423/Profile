import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import Footer from "../components/admin/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-4 flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
