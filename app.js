const express = require('express');
const app = express();
const PORT = 3000
const dbConnection = require('./util/DB')
dbConnection();

app.use(express.json());    // get data in req.body as json format

const userRoutes = require('./routes/UserRoutes');
const ProductCategoryRoutes = require('./routes/ProductCategoryRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const EmployeeRoutes = require('./routes/EmployeeRoutes');

app.use("/users", userRoutes);
app.use("/category", ProductCategoryRoutes);
app.use("/products", ProductRoutes);
app.use("/employees", EmployeeRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})