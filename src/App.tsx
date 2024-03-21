import { FiHome } from "react-icons/fi";
import { Sidebar } from "./Components/SideBar";
import { SidebarItem } from "./Components/SidebarItem";
import { PiUsers } from "react-icons/pi";
import { AiOutlineShop } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import instagramLogo from "../src/assets/instagram_logo.png";
import userIcon from "../src/assets/user_icon.png";
import { MdOutlineAmpStories } from "react-icons/md";
import { Content } from "./Components/Content";

const App = () => {
  return (
    <>
      {/* Discount content */}
      <div className="hidden w-full h-8 bg-red-100 md:block">
        <p className="text-center text-orange-500">
          Get 50% discount on BabyCode membership
        </p>
      </div>
      {/* Top content on mobile */}
      <div className="fixed top-0 w-full h-32 p-2 text-slate-300 md:hidden bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="flex items-center justify-between py-1">
          <p>
            <img src={userIcon} width={32} height={32} alt="User icon" />
          </p>
          <p className="mt-2 text-xl font-semibold">Home</p>
          <p>
            <img
              src={instagramLogo}
              width={32}
              height={32}
              alt="Instagram logo"
            />
          </p>
        </div>
        <div className="flex justify-center py-1">
          <div className="inline-flex items-center p-2 m-1 font-bold text-center bg-blue-600 rounded-3xl">
            <p className="p-1.5 mr-1 text-blue-600 bg-white rounded-2xl">
              IELTS
            </p>
            <p className="mr-1">| PTE </p>
            <p className="mr-1">| TOEFL</p>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <div className="w-full p-4 mt-32 md:mt-0 md:w-3/4 lg:w-4/5">
          <Content />
        </div>
      </div>

      {/* Bottom navigation on mobile */}
      <div className="fixed bottom-0 left-0 w-full text-center md:hidden bg-slate-50">
        <nav className="flex items-center justify-around list-none">
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
      </div>
    </>
  );
};

export default App;
