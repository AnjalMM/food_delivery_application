const express = require('express')
const router = express.Router();
const Pizza = require('../models/pizzaModels')


router.get('/getallpizzas',async (req,res)=>{
  
    try{
        const user = await Pizza.find({});
        
        res.send(user);
        
     }catch(err){
           console.log(err);
        };
     

})

router.post("/addpizza", async (req, res) => {
    const pizza = req.body.pizza;
  
    try {
      const newpizza = new Pizza({
        name: pizza.name,
        image: pizza.image,
        varients: ["small", "medium", "large"],
        description: pizza.description,
        category: pizza.category,
        prices: [pizza.prices],
      });
      await newpizza.save();
      res.send('new pizza added succesfully');
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  });


  // router.post("/getpizzabyid", async (req, res) => {
  //   const pizzaid = req.body.pizzaid;
   
   
  //   try {
  //     const pizza = await Pizza.findOne({ 
  //       _id: pizzaid})
    
  //     res.send(pizza);
  //   } catch (error) {
  //     return res.status(400).json({ message: error });
      
      
  //   }
  // });

  router.get('/getallpizzas/:id',async (req,res)=>{
 



   
         try {
          const uid= await Pizza.findById(req.params.id)
            
            
          if (!uid) {
            return res.status(404).send({ message: 'Item not found' });
          }
          res.status(200).json(uid);
         
        } catch (error) {
          res.status(500).send({ message: 'Error fetching item', error });
        }
         
         
  })

 
  router.put('/getallpizzas/:id',async (req,res)=>{
 
    try {
      const pizzaId = req.params.id;
      const updatedData = req.body;

      // Find the pizza by ID and update it
      const updatedPizza = await Pizza.findByIdAndUpdate(
          pizzaId, // ID to find
          updatedData, // Data to update
          { new: true } // Option to return the updated document
      );

      if (updatedPizza) {
          res.status(200).json({
              message: 'Pizza updated successfully',
              pizza: updatedPizza,
          });
      } else {
          res.status(404).json({
              message: 'Pizza not found',
          });
      }
  } catch (error) {
      res.status(500).json({
          message: 'An error occurred',
          error: error.message,
      });
  }
    
})


router.delete('/getallpizzas/:id',async (req,res)=>{

  try {
   

    // Find and delete the pizza by ID
    const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);

    if (deletedPizza) {
        res.status(200).json({
            message: 'Pizza deleted successfully',
            pizza: deletedPizza,
        });
    } else {
        res.status(404).json({
            message: 'Pizza not found',
        });
    }
} catch (error) {
    res.status(500).json({
        message: 'An error occurred',
        error: error.message,
    });
}
  
})


module.exports = router ;