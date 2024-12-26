/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart,deleteFromCart} from '../actions/cartActions'
import Checkout from '../components/Checkout'


export default function cartscreen() {
    const cartstate = useSelector(state => state.cartReducer)
     const cartItems = cartstate.cartItems
     var subtotal = cartItems.reduce((x,item)=> x+item.price ,0)

     const dispatch = useDispatch();
  
  return (
    
    <div>
    <div className="row justify-content-center " data-aos="fade-down">
      <div className="col-md-6">
        <h2 >my cart</h2>
        {cartItems.map((item) => {
          return (
            <div className="flex-container ">
              <div className="text-left m-1  p-5">{/*first div*/}
                <h6>
                  {item.name}[{item.varient}]
                </h6>
                <h6>
                  Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h6>

                <i class="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                <b> {item.quantity} </b>
                <i class="fa fa-minus" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
              
              <hr/>
              </div>
              <div className="m-1 w-100">{/*second div*/}
                  <img src={item.image} style={{height:"80px",width:"80px"}}/>

              </div>
              <div className="m-1 w-100">{/*third div*/}
              <i className="fa fa-trash m-1" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className='col-md-4 ' >
        <h2 style={{fontSize:'30px'}} className='p-5'>subtotal : {subtotal} /Rs-</h2>
        <Checkout subtotal ={subtotal}/>
      </div>

     </div>
  </div>
    
  )
}
