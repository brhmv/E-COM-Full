//#region 

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const HOST = 5000;
// const app = express();
// const path = require("path");


// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));


// let products = [
//   {
//     id: 1,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: `/product_1.png`,
//     price: 50.0,
//   },
//   {
//     id: 2,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: `/product_2.png`,
//     price: 85.0,
//   },
//   {
//     id: 3,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: `/product_3.png`,
//     price: 60.0,
//   },
//   {
//     id: 4,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_4.png",
//     price: 100.0,
//   },
//   {
//     id: 5,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_5.png",
//     price: 85.0,
//   },
//   {
//     id: 6,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_6.png",
//     price: 85.0,
//   },
//   {
//     id: 7,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_7.png",
//     price: 85.0,
//   },
//   {
//     id: 8,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_8.png",
//     price: 85.0,
//   },
//   {
//     id: 9,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_9.png",
//     price: 85.0,
//   },
//   {
//     id: 10,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_10.png",
//     price: 85.0,
//   },
//   {
//     id: 11,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_11.png",
//     price: 95.0,
//   },
//   {
//     id: 12,
//     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     category: "women",
//     image: "/product_12.png",
//     price: 89.0,
//   },
//   {
//     id: 13,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_13.png",
//     price: 895.0,
//   },
//   {
//     id: 14,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_14.png",
//     price: 815.0,
//   },
//   {
//     id: 15,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_15.png",
//     price: 835.0,
//   },
//   {
//     id: 16,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_16.png",
//     price: 856.0,
//   },
//   {
//     id: 17,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_17.png",
//     price: 835.0,
//   },
//   {
//     id: 18,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_18.png",
//     price: 385.0,
//   },
//   {
//     id: 19,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_19.png",
//     price: 105.0,
//   },

//   {
//     id: 20,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_20.png",
//     price: 185.0,
//   },

//   {
//     id: 21,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_21.png",
//     price: 145.0,
//   },

//   {
//     id: 22,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_22.png",
//     price: 85.0,
//   },

//   {
//     id: 23,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_23.png",
//     price: 85.0,
//   },

//   {
//     id: 24,
//     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
//     category: "men",
//     image: "/product_24.png",
//     price: 35.0,
//   },

//   {
//     id: 25,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_25.png",
//     price: 45.0,
//   },

//   {
//     id: 26,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_26.png",
//     price: 785.0,
//   },

//   {
//     id: 27,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_27.png",
//     price: 445.0,
//   },

//   {
//     id: 28,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_28.png",
//     price: 855.0,
//   },

//   {
//     id: 29,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_29.png",
//     price: 550.0,
//   },

//   {
//     id: 30,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_30.png",
//     price: 43.0,
//   },

//   {
//     id: 31,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_31.png",
//     price: 555.0,
//   },

//   {
//     id: 32,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_32.png",
//     price: 335.0,
//   },

//   {
//     id: 33,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_33.png",
//     price: 632.0,
//   },

//   {
//     id: 34,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_34.png",
//     price: 42.0,
//   },

//   {
//     id: 35,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_35.png",
//     price: 444.0,
//   },

//   {
//     id: 36,
//     name: "Boys Orange Colourblocked Hooded Sweatshirt",
//     category: "kid",
//     image: "/product_36.png",
//     price: 234.0,
//   }];

// let myBag = [];

// let orders = [];

// // let i = 1;
// // products  = products .map((item) => {
// //   let obj = { ...item, id: i++ };
// //   return obj;
// // });

// app.get("/products", (req, res) => {
//   res.json(products);
// });

// app.get("/my-bag", (req, res) => {
//   res.json(myBag);
// });

// app.get("/orders", (req, res) => {
//   res.json(orders);
// });

// app.post("/add-mybag", (req, res) => {
//   let obj = req.body;
//   myBag.push(obj);
//   res.send(`Element with ${obj.name} was added to bag`);
// });

// // app.post("/add-orders", (req, res) => {
// //   let obj = req.body;
// //   orders.push(obj);
// //   res.send(`Orders of ${obj.email} was added orders`);
// // });

// app.post("/add-orders", (req, res) => {
//   let obj = req.body;
//   orders.push(obj);
//   res.json(orders);
// });

// app.delete("/delete-mybag/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   myBag = myBag.filter((item) => id !== item.id);
//   res.send(
//     `Element with ${myBag.find((item) => id === item.id).name
//     } was deleted from bag`
//   );
// });

// app.delete("/delete-admin/:id", (req, res) => {
//   console.log('DELETE request received:', req.url);
//   try {
//     let id = parseInt(req.params.id);
//     products = products.filter((item) => id !== item.id);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post("/add-admin", (req, res) => {
//   let obj = req.body;
//   obj.image = products[4].image;
//   products.push(obj);
//   res.send(`Element with ${obj.name} was added to products `);
// });

// app.put("/change-admin/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   let index = products.findIndex((item) => id === item.id);
//   products[index] = { ...req.body, image: products[index].image };
//   res.send(`Element ${req.body.name} was changed`);
// });

// app.get("/search-products /:searchValue", (req, res) => {
//   let searchValue = req.params.searchValue;
//   let filteredArray = products.filter((item) =>
//     item.name.startsWith(searchValue)
//   );
//   res.json(filteredArray);
// });

// app.get("/search-admin/:searchValue", (req, res) => {
//   let searchValue = req.params.searchValue;
//   let filteredArray = products.filter((item) =>
//     item.name.startsWith(searchValue)
//   );
//   res.json(filteredArray);
// });

// app.listen(HOST, () => {
//   console.log(HOST + " OK");
// });



//#endregion

const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const basketRoutes = require('./routes/basketRoutes');
const cors = require('cors');
const Product = require('./models/product');
const app = express();
const port = 8080;

app.use(cors());

const uri = "mongodb+srv://Allahverdi:421281Aa@cluster0.vkqlnsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => console.log(`Connected to MongoDB`))
  .catch(err => console.error('Connection error:', err));

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log(`Connected to MongoDB`))
//   .catch(err => console.error('Connection error:', err));



app.use(express.json());

// Routes
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/basket', basketRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const products = [
//   { id: 1, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_1.png", price: 50.0 },
//   { id: 2, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_2.png", price: 85.0 },
//   { id: 3, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_3.png", price: 60.0 },
//   { id: 4, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_4.png", price: 100.0 },
//   { id: 5, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_5.png", price: 85.0 },
//   { id: 6, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_6.png", price: 85.0 },
//   { id: 7, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_7.png", price: 85.0 },
//   { id: 8, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_8.png", price: 85.0 },
//   { id: 9, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_9.png", price: 85.0 },
//   { id: 10, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_10.png", price: 85.0 },
//   { id: 11, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_11.png", price: 95.0 },
//   { id: 12, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", image: "/product_12.png", price: 89.0 },
//   { id: 13, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_13.png", price: 895.0 },
//   { id: 14, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_14.png", price: 815.0 },
//   { id: 15, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_15.png", price: 835.0 },
//   { id: 16, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_16.png", price: 856.0 },
//   { id: 17, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_17.png", price: 835.0 },
//   { id: 18, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_18.png", price: 385.0 },
//   { id: 19, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_19.png", price: 105.0 },
//   { id: 20, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_20.png", price: 185.0 },
//   { id: 21, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_21.png", price: 145.0 },
//   { id: 22, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_22.png", price: 85.0 },
//   { id: 23, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_23.png", price: 85.0 },
//   { id: 24, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", image: "/product_24.png", price: 35.0 },
//   { id: 25, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_25.png", price: 45.0 },
//   { id: 26, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_26.png", price: 785.0 },
//   { id: 27, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_27.png", price: 445.0 },
//   { id: 28, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_28.png", price: 855.0 },
//   { id: 29, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_29.png", price: 550.0 },
//   { id: 30, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_30.png", price: 43.0 },
//   { id: 31, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_31.png", price: 555.0 },
//   { id: 32, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_32.png", price: 335.0 },
//   { id: 33, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_33.png", price: 632.0 },
//   { id: 34, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_34.png", price: 42.0 },
//   { id: 35, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_35.png", price: 444.0 },
//   { id: 36, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: "/product_36.png", price: 234.0 }
// ];

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(async () => {
//   try {
//     await Product.insertMany(products);
//     console.log('Products inserted successfully');
//   } catch (error) {
//     console.error('Error inserting products:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// }).catch(err => {
//   console.error('Database connection error:', err);
// });