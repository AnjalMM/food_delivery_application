import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import pizzas from '../pizzadata'
import Pizza from '../components/Pizza'
import { getAllPizzas } from '../actions/pizzaActions'
import Loading from '../components/Loading'
import Error from '../components/Error'



export default function Homescreen() {

  const dispatch = useDispatch()
  

  const pizzasstate = useSelector(state=>state.getAllPizzasReducer)
  const{pizzas,error,loading}=pizzasstate
  useEffect(() => {
    
    dispatch(getAllPizzas())
  
   
  },[])
  
  return (
    <div>
       <div className='row'>
        {loading?(<Loading/>):error?(<Error error='something went wrong'/>):(
pizzas.map(pizza=>{
  return <div className='col-md-4'>
      <div key={pizza.id} >
          <Pizza pizza={pizza}/>
      </div>
  </div>
})
        )};
              
       </div>

    </div>
  )
}
