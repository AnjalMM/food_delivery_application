/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addPizza } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function addpizza() {

  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const addpizzastate=useSelector(state=>state.addPizzaReducer);//destructure out allthe var
  const{success ,error ,loading}=addpizzastate


  function formHandler(e) {
    e.preventDefault();

    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice
      }
    }
    console.log(pizza);
    dispatch(addPizza(pizza))
  }

  return (
    <div>
      <div>
        <h1 style={{marginLeft:'38%'} } className='p-3'>Add pizza </h1>
      </div>
      {loading && (<Loading/>)}
        {error && (<Error error="something went wrong"/>)}
        {success && (<Success success="New Pizza Added Successfully"/>)}

      <form className='shadow-lg p-5 rounded' onSubmit={formHandler}>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          
          />
          <input
            type="text"
            className="form-control"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
           
          />
          <input
            type="text"
            className="form-control"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
           
          />
          <input
            type="text"
            className="form-control"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
           
          />
          <input
            type="text"
            className="form-control"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          
          />
          <input
            type="text"
            className="form-control"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          
          />
          <input
            type="text"
            className="form-control"
            placeholder="image URL"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
            
            
          />
          <button className="btn btn-danger mt-3" type="submit">
            Add Pizza
          </button>
        </form>
    </div>
  )
}
