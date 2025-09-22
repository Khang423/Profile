import Header from "../components/user/Header";

const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full h-10 ">
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default UserLayout;
