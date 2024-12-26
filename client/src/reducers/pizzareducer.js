export const getAllPizzasReducer=(state={pizzas:[]},action)=>{
    
    switch(action.type)
    {
        
        case "GET_PIZZAS_REQUEST" :return {
           
            loading:true,
            ...state
        }
        case "GET_PIZZAS_SUCCESS" :return{
           
            loading:false,
            pizzas : action.payload
        }
        case "GET_PIZZAS_FAILED" :return{
            error:action.payload,
            loading:false
        }
        default :return state
    }

}

export const addPizzaReducer=(state={},action)=>{//intially the state is empty
    //here im having actions here
        switch(action.type)
        {
            //we have to write cases here
            case "ADD_PIZZA_REQUEST" :return {
                //whenever the request is sent we have to create one variable loading
                loading:true,
                ...state
            }
            case "ADD_PIZZA_SUCCESS" :return{
                //whenever the data is received it may be success or failure
                loading:false,//whatever is this the response is sent 
               success:true,// so we are going to check success in the addpizza component 
            }
            case "ADD_PIZZA_FAILED" :return{
                error:action.payload,
                loading:false//request is failed means
            }
            default :return state
        }
    
    }
