const express = require('express');
const mongoose = require('mongoose');

const Product = require('./models/product.model');

const productRoute = require('./routes/product.route');

const app = express();

// middleware

// for json. Input value structure should be json
app.use(express.json());
// for url encodes. Users can input values from forms
app.use(express.urlencoded({extended : true}));


// routes
app.use("/api/products",productRoute);

app.get('/',(req,res)=>{
    res.send("hi kavi dsfdfd");
});



mongoose.connect('mongodb+srv://kavindimaduwage:qfCq5XfAI6p7KtEU@cluster0.an5xz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to mongodb!');
    app.listen('3000',()=>{
        console.log('server is running on port 3000');
    });
  })

  .catch(() => {
    console.log('Connected failed!')
  });

