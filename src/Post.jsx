import React from "react";
import { IoIosMore } from "react-icons/io";
import { IoCloseOutline, IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";
import { PiShareFatThin } from "react-icons/pi";

// Define the default profile image URL
const defaultProfileImage = "https://imgs.search.brave.com/MWlI8P3aJROiUDO9A-LqFyca9kSRIxOtCg_Vf1xd9BA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

const links = [
  { text: "1.8k", icon: <CiHeart size={20} />, href: "#" },
  { text: "233k", icon: <TfiComment size={15} />, href: "#exploret" },
  { text: "133", icon: <PiShareFatThin size={20} />, href: "#notifications" },
  { text: "100k", icon: <IoEyeOutline size={20} />, href: "#messages" },
];

const Post = (props) => {
  return (
    <>
      <div className="relative block top-20 max-w-[600px] mx-auto mb-4 px-4 sm:px-6 lg:px-8a">
        <div className="border border-gray-900 flex flex-col rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2 cursor-pointer">
              {/* Render the profile image or the default image */}
              <div>
                <img
                  src={props.profile || defaultProfileImage}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <div className="text-sm">
                <p className="font-bold">{props.username}</p>
                <p className="text-xs text-gray-500">{props.time}</p>
              </div>
            </div>
            <div className="flex gap-3 text-gray-400 cursor-pointer">
              <div>
                <IoIosMore size={22} />
              </div>
              <div>
                <IoCloseOutline size={22} />
              </div>
            </div>
          </div>
          <div>
            <div className="mt-1">
              <p className="text-sm">{props.text}</p>
            </div>
            {props.image && (
              <div className="mt-2 w-full h-[300px]">
                <img
                  src={props.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="mt-4 border-t border-gray-900" />
          <div className="pt-1.5">
            <nav className="flex justify-between items-center text-sm text-gray-400">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-1 lg:gap-2 py-2 lg:py-3 flex-wrap  px-2 lg:px-6 rounded-full hover:bg-[#1b1b1b] cursor-pointer "
                >
                  {link.icon}
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
