import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-4 flex-1">This is the main content</main>;
      </div>
      <Footer />
    </div>
  );
}
