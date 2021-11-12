import { BsFillSuitHeartFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { GrShareOption } from "react-icons/gr";
export default function BlogActions() {
 return (
  <>
   <div className="py-4 flex items-start flex-start  justify-around">
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
  </>
 );
}
