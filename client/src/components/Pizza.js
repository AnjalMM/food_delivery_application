import React, {useState,} from 'react';
import {Modal,} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';



export default function Pizza({pizza}) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  const [show, setShow] = useState(false); //react bootstrap modal

  const handleClose = () => setShow(false); //react bootstrap modal
  const handleShow = () => setShow(true); //react bootstrap modal
const dispatch = useDispatch()
function addtocart(){
 dispatch(addToCart(pizza,quantity,varient))
}

  return (
    <div data-aos="zoom-in" className="shadow-lg p-5 m-5 bg-white rounded">
      <div>
      <h6>{pizza.name}</h6>
      <img
          src={pizza.image}
          className="img-fluid" onClick={handleShow}
          style={{ height: "250px", width: "250px" }} alt='not showing'/>
          <div className="flex-container">
            <div style={{display: 'flex',justifyContent:'space-between'}} className=' w-100' >
        
        <div>
        <b style={{fontSize:'15px'}}>varients:</b>
          <select
            className="form-control w-100"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {/*we have to apply varient for the selection*/}
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>; // we are mapping through all the pizza varients
            })}
          </select>

        </div>
        <div>
        <b style={{fontSize:'15px'}}>Quantity:</b>
          <select
            className="form-control w-100 "
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {/*we have to apply quantity for the selection*/}
            {[...Array(10).keys()].map((x, i) => {
              //for empty array with element we have to pass two parameter one is object and another one is index.
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>

        </div>
        
       
        
        
        
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h6 className="mt-4">
            price:{pizza.prices[0][varient] * quantity} Rs:/-
          </h6>
          {/* we have to update price amount according to the varient and quantity*/}
        </div>
        <div className="m-1 mt-3 w-100">
          <button className="btn bg-danger" onClick={addtocart}>
           ADD TO CART
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        {" "}
        {/*react bootstrap modal*/}
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid"
            style={{ height: "400px" }}
          alt='not showing'/>
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
      </div>
      
      </div>
  )
}
