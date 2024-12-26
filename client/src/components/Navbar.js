import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";


export default function Navbar() {
  const cartsstate = useSelector((state)=>state.cartReducer)
  const userstate = useSelector((state)=>state.loginUserReducer)
  const {currentUser} = userstate;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <a className="font-effect-fire" href='/'>
          Foodies..
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end ">
          <ul className="navbar-nav">
            {currentUser ? (
            <div className="dropdown">
            <a className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             {currentUser.name}
            </a>
            <div className="dropdown-menu  ml-1" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/orders">Orders</a>
              <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Log out</li></a>
              
            </div>
          </div>
            ):(
              <li className="nav-item ">
              <a className="nav-link text-dark" href="/login">
                Login
              </a>
            </li>
            )}
            
            <li className="nav-item">
              <a className="nav-link text-dark" href="/cart">
                Cart {cartsstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
