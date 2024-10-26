import { LuUsers } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className=" hidden md:fixed -right-[100px] top-1/2 -translate-y-1/2 bg-[#004ab1] bg-opacity-95 hover:bg-blue-900 text-white  md:flex items-center gap-2 p-3 rounded-md text-sm font-medium -rotate-[90deg]">
      <LuUsers size={20} />
      <span>contact customer service</span>
    </aside>
  );
};

export default Sidebar;
