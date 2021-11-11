import { BsFillSuitHeartFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { GrShareOption } from "react-icons/gr";
export default function BlogActions() {
 return (
  <>
   <div className="pt-6 flex items-center justify-around	">
    <div className="flex items-center hover:underline">
     <span className="text-red-500">
      <BsFillSuitHeartFill />
     </span>
     <span className="text-sm px-1">5 Likes</span>
    </div>
    <div className="flex items-center hover:underline">
     <span className="text-black">
      <GoComment />
     </span>

     <span className="text-sm px-1">10 Comments</span>
    </div>

    <div className="flex items-center hover:underline">
     <span className="text-black">
      <GrShareOption />
     </span>

     <span className="text-sm px-1">Share</span>
    </div>
   </div>

   {/* <div className="flex items-center justify-between mt-4">
    <img
     src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
     className="bg-yellow-500 rounded-full w-10 h-10 object-cover border"
    />
    <div className="flex items-center	justify-between	 bg-gray-50 h-11 w-11/12 border rounded-2xl	 overflow-hidden px-4 ">
     <input
      type="text"
      className="h-full w-full bg-gray-50 outline-none "
      placeholder="Write your comment..."
      name="comment"
     />
    </div>
   </div> */}
  </>
 );
}
