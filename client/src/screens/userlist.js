import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function userlist() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const usersstate=useSelector((state) =>state.getAllUsersReducer)

  const {loading,error,users}=usersstate

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return <div>
   <h1 style={{marginLeft:'38%'}}>Users List</h1>
   {error && (<Error/>)}
   {loading && (<Loading/>)}

   <table className="table table-striped table- bordered table-responsive-sm">
          <thead className="thead-dark">
              <tr>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
              </tr>

          </thead>
          <tbody>
              {users && users.map(user=>{
                  return <tr>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td><i className="fa fa-trash" onClick={()=>dispatch(deleteUser(user._id))}></i></td>
                      </tr>
              })}
          </tbody>

      </table>

  </div>;
  
}
