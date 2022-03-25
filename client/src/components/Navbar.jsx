// rafce used
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import React from "react";

const NavbarItem = ({title,classprops}) =>{
  //It going to return an li and rendering our classprops that we are passing into it
  //and inside li we are gonna simply render title
  return(
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  );
}

const Navbar = () => {

  const[toggleMenu,setToggleMenu] = React.useState(false);

  return (
    // for medium devices justify content center p-4 = padding
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
       <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} className="w-32 cursor-pointer "/>
       </div>
       <ul className="text-white hidden list-none md:flex flex-row justify-between items-center flex-initial">
       {/* creating an array and applied map method and passing item as props to our NavbarItem component */}
         {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
           <NavbarItem key={item+index} title={item}/>
         ))}
         <li className="bg-[#2952e3] px-7 py-2 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
           Login
         </li>
       </ul>
       <div className="flex relative">
       {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {/* handling navbar in mobile view */}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose className="cursor-pointer" onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavbarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
       </div>
    </nav>
  )
}
export default Navbar