const mongoose = require('mongoose');

// Database URI (replace 'your_db_name' with your actual database name)
const dbURI = process.env.DB_url
 // for local MongoDB
// Or if you're using MongoDB Atlas, use the connection string provided by Atlas:
// const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/your_db_name?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


  module.exports  = mongoose ;

  