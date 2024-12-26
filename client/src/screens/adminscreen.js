import React from "react";

import {Outlet,Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function adminscreen() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userstate = useSelector((state) => state.loginUserReducer);
  //destructure the current user
  const { currentUser } = userstate;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (currentUser.isAdmin === false) {
      window.location.herf = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 style={{ marginLeft: "38%", marginTop: "15px" }}> Admin panel</h1>
          <div className="row adminfunctions align-item-center">
            <ul>
              <li>
                <Link to="/admin/userlist">Users list</Link>
              </li>
              <li>
              <Link to="/admin/orderslist">Orders list</Link>
              </li>
              <li>
              <Link to="/admin/addpizza">Add pizza</Link>
              </li>
              <li>
              <Link to="/admin/pizzalist">Pizza list</Link>
              </li>
            </ul>
            
          </div>
            
            <Outlet/>
            
          
        </div>
      </div>
    </div>
  );
}
