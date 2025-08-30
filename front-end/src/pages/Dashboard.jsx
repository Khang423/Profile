<<<<<<< HEAD
import AdminLayout from "../layouts/AdminLayout";
const Dashboard = () => {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      </div>
    </AdminLayout>
=======
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-4 flex-1">This is the main content</main>;
      </div>
      <Footer />
    </div>
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412
  );
};
export default Dashboard;
