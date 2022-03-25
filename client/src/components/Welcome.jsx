import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from ".";

const Welcome = () => {
  return (
   <div className="flex w-full justify-center items-center">
   {/* Use items-start to align items to the start of the container’s cross axis */}
    <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
     <div className="flex flex-1 justify-start flex-col md:mr-10">
      <h1>
        
      </h1>
     </div>
    </div>
   </div>
  )
}

export default Welcome