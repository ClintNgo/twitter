import { SparklesIcon } from "@heroicons/react/outline";
import Inputs from "./Inputs";
import Post from "./Post";
export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "John Smith",
      username: "johnsmith",
      userImg:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      img: "https://cdn.cnn.com/cnnnext/dam/assets/201230100452-10-2021-travel-destinations-hawaii-full-169.jpg",
      text: "This view of Hawaii Island",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "John Smith",
      username: "johnsmith",
      userImg:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      img: "https://cdn.cnn.com/cnnnext/dam/assets/170606121056-hawaii---travel-destination---shutterstock-457528552.jpg",
      text: "Another view of Hawaii Island",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className=" flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Inputs />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
