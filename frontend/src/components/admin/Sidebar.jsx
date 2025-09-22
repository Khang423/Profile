import { Button, Flex } from "antd";
const SidebarItem = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    name: "Account",
    link: "/admin/account",
  },
  {
    name: "Profile",
    link: "/profile",
  },
];
const Sidebar = () => {
  return (
    <aside className="bg-gray-100 p-4 w-1/4">
      <ul className="text-xl w-full text-left p-3  ">
        {SidebarItem.map((item) => {
          return (
            <li className="w-ful mb-2" key={item.name}>
              <a href={item.link}>
                <Button type="primary">{item.name}</Button>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
