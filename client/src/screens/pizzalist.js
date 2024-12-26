/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import "bootstrap-icons/font/bootstrap-icons.json"
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { deletepizzaid } from './editpizza';

export default function pizzalist() {
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas ,error, loading} = pizzasstate;
  const dispatch = useDispatch();

  //write useEffect hook to dispatch the action
  
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

 
  
  return (
    <div>
      <h2 style={{marginLeft:'38%'}}>Pizzas List</h2>{/*so im getting all the pizzas here after that have to do conditional rendring*/}
      {loading && (<Loading/>)}
      {error && (<Error error='something went wrong'/>)} 
      <table className="table table-bordered table-responsive-sm">
          <thead className="thead-dark">
              <tr>
                  <th>Name</th>
                  <th>Prices</th>
                  <th>Category</th>
                  <th>Actions</th>  
              </tr>
          </thead>
          <tbody>
              {pizzas && pizzas.map(pizza=>{// for every iteration we ahve to get one row
                  return <tr>
                      <td>{pizza.name}</td>
                      <td>
                          Small:{pizza.prices[0]["small"]} <br></br>
                          Medium:{pizza.prices[0]["medium"]} <br></br>
                          Large:{pizza.prices[0]["large"]} <br></br>
                      </td>
                      <td>{pizza.category}</td>
                      <td>
                      
                          
                         <Link to={`/admin/editpizza/:${pizza._id}`}> <i className="fa fa-edit m-1"></i></Link>
                      </td>

                      </tr>
              })}
          </tbody>
      </table>
    </div>
  )
}
