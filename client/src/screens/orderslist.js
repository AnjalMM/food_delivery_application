import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from '../actions/orderAction';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function orderslist() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);

  const { loading, error, orders } = getordersstate;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(getAllOrders()); //now it will send the req to backend in (orderroute)
  }, []);
  return (
    <div>
      <h3 style={{marginLeft:'40%',marginTop:'12px'}}>Orders list </h3>
     {error && (<Error/>)}
     {loading && (<Loading/>)}
     <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>  
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.orderItems[0]["_id"]}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0,10)}</td>
                  <td>
                      {order.isDelivered ? (<h6 style={{color:'green'}}>Delivered</h6>) : (<button className="btn btn-danger" onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}
                      {/* when we click deliver we have to send action to delivered in backend*/}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
       
    </div>
  )
}
