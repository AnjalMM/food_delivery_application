import axios from 'axios';


export const getAllPizzas = () => async dispatch => {
    
  
    dispatch({ type: "GET_PIZZAS_REQUEST" }); 
  
    try {
      const response = await axios.get("http://localhost:5000/api/pizzas/getallpizzas"); 
      console.log(response);
      dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data }); 
    } catch (error) {
      dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
    }
    
  };
  
  export const addPizza = (pizza) => async (dispatch) => {
    //whenever we receive the request, im gonna dispatch action
    //so whenever the addpizza function called so we have to send addpiza req... we are receive pizza parameter
  
    dispatch({ type: "ADD_PIZZA_REQUEST" });
    try {
      const response = await axios.post("http://localhost:5000/api/pizzas/addpizza", { pizza });
      console.log(response);
      dispatch({ type: "ADD_PIZZA_SUCCESS",payload:response.data });
    } catch (error) {
      dispatch({ type: "ADD_PIZZA_FAILED", payload: error });
    }
  };

  
  