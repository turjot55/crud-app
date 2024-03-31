const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./test/product.model");
const productRoute = require("./routes/product.route");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node api");
  res.end();
});

// app.post("/api/products", async (req, res) => {
// //   try {
// //     const product = await Product.create(req.body);
// //     res.status(200).json(product);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// get single product
// app.get("/api/products/:id", async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const product = await Product.findById(id);
// //     res.status(200).json(product);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// });

// update product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://turjot:YyJwK4kLXJ7BCD3K@backend.gcp9brp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend"
  )
  .then(() => {
    console.log("Connected to database");
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch(() => {
    console.log("Connection failed!");
  });
