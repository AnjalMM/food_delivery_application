const express=require("express");
require('dotenv').config()
require('./db');
require('body-parser') 
require('./models/pizzaModels')
const pizzaRouter = require('./Routes/pizzaRouter');
const ordersRoute = require('./Routes/ordersRouter')
const userRoute = require('./Routes/userRouter')
const cors = require('cors')



const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
   extended : true
}))
app.use('/api/pizzas/',pizzaRouter)
app.use('/api/users/' ,userRoute)
app.use('/api/orders/',ordersRoute)



app.get("/",(req,res)=>{ //home page rout in the backend
   res.send("Server working ")
});




/*app.get('/getpizzas',async(req,res)=>{
  
   try{
      const user = await pizzaModels.find({});
      
      
      const prettyUsers = JSON.stringify(user, null, 2);
        res.setHeader('Content-Type', 'application/json'); // Optional, ensure JSON output
        res.send(prettyUsers);
   }catch(err){
         res.status(500).json({ error: `Failed to fetch users ${err}` });
      };
   
   
})*/

const port=process.env.PORT 


app.listen(port,()=>`server running on port ${port}`)



