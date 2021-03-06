import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Post from "./Post";

export default function Inputs() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="user-img"
      ></img>
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            rows="2"
            placeholder="What's happening?"
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
            // disabled
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
