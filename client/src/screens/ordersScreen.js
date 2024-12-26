/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'
import Loading from '../components/Loading';
import Error from '../components/Error';


export default function ordersScreen() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const orderstate = useSelector((state)=>state.getUserOrdersReducer);
   const { error ,orders,loading} = orderstate 
 

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
     dispatch(getUserOrders())

  },[])
  
  return (
    <div>
        <h1 style={{fontSize:'35px',marginLeft:'500px'}} className='p-3'>
            My orders
        </h1>
        <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map(order => {
            return <div className="col-md-8 m-2 p-1" data-aos="fade-down" style={{backgroundColor:"aquamarine",color:"darkslategray"}}>
              <div className="flex-container">
                <div className="text-left w-100 m-1">{/*order items*/}
                <h2 style={{fontSize:"25px"}}>Items</h2>
                <hr></hr>
                  {order.orderItems.map(item => {
                    return (
                      <div>
                        <p>
                          {item.name}[{item.varient}] * {item.quantity}=
                           {item.price}
                        </p>
                      </div>
                    );  
                  })}
                </div>
                <div className="text-left w-100 m-1">{/*order Address*/}
                <h2 style={{fontSize:"25px"}}>Address</h2>
                <hr></hr>
                <p>Street: {order.shippingAddress.street}</p>
                <p>City: {order.shippingAddress.city}</p>
                <p>Country: {order.shippingAddress.country}</p>
                <p>Pincode: {order.shippingAddress.pincode}</p>
                </div>
                <div className="text-left w-100 m-1">{/*order Information*/}
                <h2 style={{fontSize:"25px"}}>Order Info</h2>
                <hr></hr>
                <p>Order Amount: {order.orderAmount}</p>
                <p>Date: {order.createdAt.substring(0,10)}</p>
                <p>Transaction Id: {order.transactionId}</p>
                <p>Order Id: {order._id}</p>
                </div>
              </div>
            </div>;
          })}
      </div>

        
    </div>
  )
}
