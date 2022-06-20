import Image from "next/dist/client/image";
import SidebarMenuItems from "./SidebarMenuItems";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";
export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="30"
          height="30"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
        ></Image>
      </div>
      {/* menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItems text="Home" Icon={HomeIcon} active></SidebarMenuItems>
        <SidebarMenuItems text="Explore" Icon={HashtagIcon}></SidebarMenuItems>
        <SidebarMenuItems
          text="Notification"
          Icon={BellIcon}
        ></SidebarMenuItems>
        <SidebarMenuItems text="Messages" Icon={InboxIcon}></SidebarMenuItems>
        <SidebarMenuItems
          text="Bookmarks"
          Icon={BookmarkIcon}
        ></SidebarMenuItems>
        <SidebarMenuItems text="Lists" Icon={ClipboardIcon}></SidebarMenuItems>
        <SidebarMenuItems text="Profile" Icon={UserIcon}></SidebarMenuItems>
        <SidebarMenuItems
          text="Home"
          Icon={DotsCircleHorizontalIcon}
        ></SidebarMenuItems>
      </div>
      {/* button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline mt- auto">
        Tweet
      </button>
      {/* mini profile */}
      <div className=" hoverEffect text-gray-700 flex items-center justify-center xl:justify-start">
        <img
          className="h-10 w-10 rounded-full xl:mr-2"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="user-img"
        ></img>
        <div className="leading-5">
          <h4 className="font-bolt">John Smith</h4>
          <p className="text-gray-500">@Johnsmith</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8"></DotsHorizontalIcon>
      </div>
    </div>
  );
}
