const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

const authRoute =require('./routes/auth')
const usersRoute =require('./routes/users')
const sallesRoute =require('./routes/salles')
const reservationsRoute =require('./routes/reservations')



dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000


//middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.use("/auth",authRoute);
app.use("/users",usersRoute);
app.use("/salles",sallesRoute);
app.use("/reservations",reservationsRoute);




app.get("/users",(req,res)=>{
  res.send("hello first response")
}
)




// connection to mongodb and start server 
mongoose.connect(MONGODB_URI).then(()=>{
  console.log('connected to MongoDb');
  app.listen(PORT,()=>{
      console.log(`server listening on ${PORT}`)
  })
}).catch((err) =>{
  console.error('Error connecting to mongodb:',err.message)
})

module.exports = app;