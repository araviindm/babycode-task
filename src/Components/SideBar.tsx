import { SidebarItem } from "./SidebarItem";
import logo from "../assets/logo.svg";
import { FiHome } from "react-icons/fi";
import { PiUsers } from "react-icons/pi";
import { MdOutlineAmpStories } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineArrowCircleRight } from "react-icons/md";

export function Sidebar() {
  return (
    <div className="hidden w-1/4 text-white lg:w-1/5 bg-gradient-to-b from-blue-600 to-blue-900 md:block">
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
        <div className="relative p-4 text-gray-800 bg-blue-100 rounded-lg">
          <div className="mb-2">
            <p className="text-xl font-semibold text-[#285de7]">
              Explore premium
            </p>
            <p className="font-semibold text-[#5861f7] text-base">
              features with ease!
            </p>
          </div>
          <div className="mb-2">
            <div className="flex items-center my-1 text-center text-ss">
              <p>
                <FaRegCheckCircle size={16} />
              </p>
              <p className="ml-2">Unlimited Speaking Test Access</p>
            </div>
            <div className="flex items-center my-1 text-center text-ss">
              <p>
                <FaRegCheckCircle size={16} />
              </p>
              <p className="ml-2">Unlimited Writing Test Access</p>
            </div>
            <div className="flex items-center my-1 text-center text-ss">
              <p>
                <FaRegCheckCircle size={16} />
              </p>
              <p className="ml-2">Analyze Your Answer</p>
            </div>
            <div className="flex items-center my-1 text-center text-ss">
              <p>
                <FaRegCheckCircle size={16} />
              </p>
              <p className="ml-2">Check Band Score</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="mt-1 font-bold text-ss">Only @ ₹299 </p>
          </div>
          <button className="absolute right-0 flex p-2 text-gray-100 bg-blue-700 bottom-1 rounded-l-3xl">
            <p>Buy Now</p>
            <p className="mx-1">
              <MdOutlineArrowCircleRight size={24} />
            </p>
          </button>
        </div>
        <button className="flex items-center mx-2 my-2 text-center ">
          <p>
            <IoLogOutOutline size={24} />
          </p>
          <p className="ml-2">Logout</p>
        </button>
      </div>
    </div>
  );
}
