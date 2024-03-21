import { SidebarItem } from "./SidebarItem";
import logo from "../assets/logo.svg";
import { FiHome } from "react-icons/fi";
import { PiUsers } from "react-icons/pi";
import { MdOutlineAmpStories } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { BuyNow } from "./BuyNow";
import { IoLogOutOutline } from "react-icons/io5";

export function Sidebar() {
  return (
    <div className="sticky top-0 hidden w-1/4 h-screen text-white lg:w-1/5 bg-gradient-to-b from-blue-600 to-blue-900 md:block">
      <div className="flex items-center mx-4 my-2">
        <img src={logo} width={54} height={54} alt="Logo" />
        <p className="text-xl font-semibold">BabyCode</p>
      </div>
      <nav className="mx-10 list-none">
        <SidebarItem
          tab={"tab0"}
          icon={<FiHome size={24} />}
          text="Home"
          active={true}
        />
        <SidebarItem
          tab={"tab1"}
          icon={<PiUsers size={24} />}
          text="Community"
        />
        <SidebarItem
          tab={"tab2"}
          icon={<MdOutlineAmpStories size={24} />}
          text="Stories"
        />
        <SidebarItem
          tab={"tab3"}
          icon={<AiOutlineShop size={24} />}
          text="Shop"
        />
        <SidebarItem
          tab={"tab4"}
          icon={<LuMessageSquare size={24} />}
          text="Feedback"
        />
      </nav>
      <div className="fixed bottom-0 left-0 w-1/4 p-2 lg:w-1/5">
        <BuyNow />
        <button className="flex items-center mx-4 my-2 text-center">
          <p>
            <IoLogOutOutline size={24} />
          </p>
          <p className="ml-2">Logout</p>
        </button>
      </div>
    </div>
  );
}
