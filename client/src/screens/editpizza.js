/* eslint-disable react-hooks/rules-of-hooks */
import  React,{useState,useEffect} from 'react'
import { resolvePath, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'





export default function editpizza() {





  // const [name, setname] = useState("");
  // const [smallprice, setsmallprice] = useState();
  // const [mediumprice, setmediumprice] = useState();
  // const [largeprice, setlargeprice] = useState();
  // const [image, setimage] = useState("");
  // const [description, setdescription] = useState("");
  // const [category, setcategory] = useState("");
  

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let id = useParams() 
    var pizzaid = id.pizzaid
    pizzaid = pizzaid.replace(/^:/,'')
     
    
    const [values,setvalues] = useState({


      _id : pizzaid,
      name : '',
      image : '',
      description : '',
      category :'',
      prices: [{
        small: '',
        medium: '',
        large: '',
      }]
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
 // eslint-disable-next-line react-hooks/rules-of-hooks
 useEffect(()=>{

 axios.get(`http://localhost:5000/api/pizzas/getallpizzas/${pizzaid}`)
 .then(res=>{
  setvalues({...values,
    name : res.data.name,
    prices :res.data.prices[0],
    image : res.data.image,
    category : res.data.category,
    description :res.data.description,

  })
 })
 .catch(err=>console.log(err))
 

 },[])

//  function formHandler(e) {
//   e.preventDefault();

//   const pizza = {
//     name,
//     image,
//     description,
//     category,
//     prices: {
//       small: smallprice,
//       medium: mediumprice,
//       large: largeprice
//     }
//   }
//   console.log(pizza);
 
// }
const navigate = useNavigate()
const handlesubmit=(e)=>{
  e.preventDefault();
  axios.put(`http://localhost:5000/api/pizzas/getallpizzas/${pizzaid}`,values)
  .then(res=>{
    console.log(res)
    navigate('/admin/pizzalist')
  })
  .catch(err=>console.log(err))

}

 const  deletepizzaid=()=>{
  

 
  axios.delete(`http://localhost:5000/api/pizzas/getallpizzas/${pizzaid}`)
  .then(res=>{
    
    console.log(res);
    window.location.reload()
    window.location.href='/admin/pizzalist'
    
    
  })
  .catch(err=>console.log(err))
  
  
}


    

  return (
    <div>

        <h1>Edit pizza</h1>
         <p> {'pizz '+  pizzaid }  </p>
        {console.log('hai anjal')
         } 
         {console.log(typeof pizzaid)}
         
        
         <form className='shadow-lg p-5 rounded' onSubmit={handlesubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="name"
           value={values.name}
           onChange={e=>setvalues({...values, name :e.target.value})}
          
          />
          <input
            type="text"
            className="form-control"
            placeholder="small varient price"
           value={values.prices.small}
           onChange={e=>setvalues({...values, small :e.target.value})}
          />
          <input
            type="text"
            className="form-control"
            placeholder="medium varient price"
            value={values.prices.medium}
            onChange={e=>setvalues({...values, medium :e.target.value})}
          />
          <input
            type="text"
            className="form-control"
            placeholder="large varient price"
            value={values.prices.large}
            onChange={e=>setvalues({...values, large :e.target.value})}
          />
          <input
            type="text"
            className="form-control"
            placeholder="category"
            value={values.category}
            onChange={e=>setvalues({...values, category :e.target.value})}
          />
          
         < input
            type="text"
            className="form-control"
            placeholder="description"
            value={values.description}
            onChange={e=>setvalues({...values, description :e.target.value})}
          />
          <input
            type="text"
            className="form-control"
            placeholder="image URL"
            value={values.image}
            onChange={e=>setvalues({...values, image :e.target.value})}
            
            
          />
          <button className="btn btn-success mt-2" type="submit">
            update
          </button>
          <button className='btn btn-danger m-3 mt-4' onClick={()=>deletepizzaid()}>delete</button>
        </form>
        
    </div>
    
  )
}
