import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { CiMail, CiSettings } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";


const navlinks = [
  { text: "Home", icon:<RiHome2Line size={22}/>, href: "#" },
  { text: "Explore", icon:<IoIosSearch  size={24}/>, href: "#exploret" },
  { text: "Notifications", icon:<IoIosNotificationsOutline size={24} />, href: "#notifications" },
  { text: "Messages", icon:<CiMail  size={22}/>, href: "#messages" },
  { text: "Profile", icon:<RxAvatar  size={22}/>, href: "#profile" },
  { text: "Settings", icon:<CiSettings size={24} />, href: "#settings" },
];

const Sidebar = () => {
  return (
    <>
      <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-20 fixed lg:w-[25.5%]">
        <div className="h-screen border border-gray-900 w-full">
          <div className="">
            <div className="flex">
              <nav className="w-full">
                {navlinks.map((navlink, index) => (
                  <a key={index} href={navlink.href} className="flex items-center gap-5 px-8 py-3 mb-1 text-base hover:bg-[#1b1b1b] w-full">
                    {navlink.icon}
                    {navlink.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
