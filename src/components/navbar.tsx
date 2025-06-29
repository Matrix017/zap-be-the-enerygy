import {Link} from "react-router-dom";
import {useState} from "react";

export default function Navbar() {
const[clicked ,setClicked] = useState(false);

function clickedHandler() {
  setClicked(!clicked);}




   return (
   <>
     <nav className="flex  z-10  capitalize  justify-between   items-center  mx-10  p-4 backdrop-blur-lg bg-accent sticky top-0   rounded-md h-8 " >
    <Link to='/'  className=" transition-colors hover:text-lime-500 text-2xl  "  >zap!</Link>
     <ul className=" hidden sm:flex gap-7  "  > 
        <li className=" transition-all hover:scale-y-95    hover:border-b-2 hover:border-b-green-500"  > <Link to='/flavors' >flavors</Link> </li>
        <li className=" transition-all hover:scale-y-95    hover:border-b-2 hover:border-b-green-500"  > <Link to='/reviews' >reviews</Link> </li>
        <li className=" transition-all hover:scale-y-95    hover:border-b-2 hover:border-b-green-500"  > <Link to='/gallery' >gallery</Link>  </li>
        <li className=" transition-all hover:scale-y-95    hover:border-b-2 hover:border-b-green-500"  > <Link to='/join' >join   </Link> </li>
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
           <Link to="/join" className="focus:text-lime-400">Join</Link>
        </div>
      )}
      </nav>
   
     </>

)
}

