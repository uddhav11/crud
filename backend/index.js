// const Product = require("./models/product.model");
// const express = require('express');
// const mongoose = require("mongoose");
// require("dotenv");

// const app= express()

// app.use(express.json());


// app.get('/get', (req, res) => {
//     res.json('this is the response')
//     console.log('this is after the response')
//   })



// const port=3000

// app.listen(port, ()=> {
//     console.log(`listening is the port ${port}`)
// })




// const Product = require("./models/product.model");
const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config(); // Ensure dotenv is configured
const cors= require('cors')




const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(cors())

mongoose
  .connect(process.env.MONGO_DB_URL, {serverSelectionTimeoutMS: 30000})
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.error("Mongodb connection error: ", err));




app.use('/api/todos', require('./routes/todos'))



const port = 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


// app.post('/user', async (req, res) => {
//     const {name, age, profession}= req.body;
//     const user= new User({name, age, profession})
//     try{
//         const saveedUser= await user.save()
//         res.status(201).json(saveedUser)
//     } catch (err){
//         res.status(400).json({message: err.message})
//     }
// })

// app.get('/user', async (req, res) => {
//     try{
//         const users= await User.find()
//         res.json(users)
//     } catch (err){
//         res.status(500).json({message: err.message})
//     }
// })



// app.post('/api/products', async (req, res) => {
//     try{
//         const product= await Product.create(req.body)
//         res.status(200).json(product)
//     } catch (err){
//         console.error('this is the error', err)
//         res.status(400).json('there is error')
//     }
// })


// app.get('/api/products', async (req, res) => {
//     try{
//         const products= await Product.find({})
//         res.status(200).json(products)
//     } catch (err){
//         res.status(400).json({message: err.message})
//     }
// })




// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


