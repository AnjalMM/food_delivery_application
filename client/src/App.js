import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.json"
import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import cartscreen from "./screens/cartscreen";
import ordersScreen from "./screens/ordersScreen";
import adminscreen from "./screens/adminscreen";
import userlist from "./screens/userlist";
import addpizza from "./screens/addpizza";
import orderslist from "./screens/orderslist";
import pizzalist from "./screens/pizzalist";
import editpizza from "./screens/editpizza";

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Homescreen} />
          <Route path="/cart" exact Component={cartscreen} />
          <Route path="/login" exact Component={Loginscreen} />
          <Route path="/Register" exact Component={Registerscreen} />
          <Route path="/orders" exact Component={ordersScreen} />
          <Route path="/admin" exact Component={adminscreen}>
               <Route path="/admin/userlist" exact Component={userlist} />
               <Route path="/admin/addpizza" exact Component={addpizza} />
               <Route path="/admin/orderslist" exact Component={orderslist} />
               <Route path="/admin/pizzalist" exact Component={pizzalist} />
               <Route path="/admin/editpizza/:pizzaid" exact Component={editpizza} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}
