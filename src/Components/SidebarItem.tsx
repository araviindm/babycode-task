import { ReactNode } from "react";

interface SidebarItemProps {
  tab: string;
  icon: ReactNode;
  text: string;
  active?: boolean;
}
export function SidebarItem({ tab, icon, text, active }: SidebarItemProps) {
  return (
    <li
      id={tab}
      className={`text-sm md:text-base flex flex-col md:flex-row  items-center justify-center md:justify-start md:my-4 md:px-3 ${
        active
          ? "text-blue-500 md:text-gray-100 border-t border-blue-700 md:bg-blue-500 md:rounded-lg p-1 font-bold"
          : ""
      }`}
    >
      <p>{icon}</p>
      <p className="ml-2">{text}</p>
    </li>
  );
}
