import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderAction'
import Loading from './Loading'
import Error from './Error'
import Success from './Success'

export default function Checkout({subtotal}) {

  const orderstate = useSelector((state)=>state.placeOrderReducer)
  const {loading,error,success}=orderstate
  const dispatch =useDispatch();

  function tokenHandler(token){
    console.log(token)
    dispatch(placeOrder(token,subtotal))
  }
  return (
    <div>
       
           {loading && (<Loading/>)}
           {error && (<Error error='something went wrong'/>)}
           {success && (<Success success='your order placed succesfully'/>)}    

        <StripeCheckout 
          amount={subtotal * 100} //in this it will be converted into paisas in dollar convert into cents so adding any var to amount prop use *100
          shippingAddress
          token={tokenHandler}
          stripeKey='pk_test_51QWB16JHUBlBoS5FsBcw4It6957C7JStSPTw70rKnMm4YT8ZZjMQf08fvi2bUHLQjombQPyg1c2fojOfVamZrDhk00wGpGp4Ky'
          currency="INR"
          >
            <button className='btn btn-danger ml-3'>Pay now</button>
        </StripeCheckout>

    </div>
  )
}

