import React,{useState,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
 const Header = () => {
  const [status,setStatus]=useState(false)
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
 const cartItems=useSelector((store)=>store.cart.items);
 console.log(cartItems);
    return (
      <div className="flex justify-between bg-pink-50">
        <div>
          <img
            className="w-20"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex p-8">
            <li className="px-4">onlineStatus: {onlineStatus ? '✅' :'🔴' }</li>
            <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
            <li className="px-4"><Link to='/'>Home</Link></li>
            <li className="px-4"><Link to='/about'>About Us</Link></li>
            <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
            <li className="px-4 font-bold"><Link to='/cart'>Cart ({cartItems.length} items)</Link></li>
            <li className="px-4"><button onClick={() => setStatus(!status)}>{status ? 'Logout' : 'Login'}</button></li>
            <li className="px-4 font-bold"><a href="#cart">{loggedInUser}</a></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;