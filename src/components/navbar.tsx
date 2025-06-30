import {Link} from "react-router-dom";
import {useState} from "react";

export default function Navbar() {
const[clicked ,setClicked] = useState(false);

function clickedHandler() {
  setClicked(!clicked);}




   return (
   <>
     <nav className="flex  z-10  capitalize  justify-between   items-center  mx-10  p-4 backdrop-blur-md    sticky top-0   rounded-md h-10 " >
    <Link to='/'  className=" transition-colors hover:text-lime-500 text-2xl  "  >zap!</Link>
     <ul className=" hidden sm:flex gap-7  "  > 
        <li   > <Link to='/flavors' className=" transition-all hover:scale-y-95 hover:animate-pulse hover:text-green-600 hover:border-b-2 hover:border-b-green-500"   >flavors</Link> </li>
        <li   > <Link to='/reviews' className=" transition-all hover:scale-y-95 hover:animate-pulse hover:text-green-600 hover:border-b-2 hover:border-b-green-500"   >reviews</Link> </li>
        <li   > <Link to='/gallery' className=" transition-all hover:scale-y-95 hover:animate-pulse hover:text-green-600 hover:border-b-2 hover:border-b-green-500"  >gallery</Link>  </li>
        <li   > <Link to='/join' className=" transition-all hover:scale-y-95    hover:animate-pulse hover:text-green-600 hover:border-b-2 hover:border-b-green-500"    >join   </Link> </li>
     </ul>
     <button id="menu" type="button" onClick={clickedHandler}   className="cursor-pointer   hover:scale-110 p-[1em] rounded-md  sm:invisible "><svg xmlns="http://www.w3.org/2000/svg"
                    width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg></button>
        {clicked && (
        <div className=" transition-all duration-300 ease-in-out  absolute top-16 left-0 w-full bg-black text-white flex flex-col gap-4 px-6 py-4 sm:hidden">
           <Link to="/" className="focus:text-lime-400">Home</Link>
           <Link to="/flavors" className="focus:text-lime-400">Flavors</Link>
           <Link to="/reviews" className="focus:text-lime-400">Reviews</Link>
           <Link to="/gallery" className="focus:text-lime-400">Gallery</Link>
           <Link to="/join" className="focus:text-lime-400">Join</Link>
        </div>
      )}
      </nav>
   
     </>

)
}

