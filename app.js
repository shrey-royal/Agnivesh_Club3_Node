const express = require('express');
const app = express();
const PORT = 3000
const dbConnection = require('./util/DB')
dbConnection();

const userRoutes = require('./routes/UserRoutes');
app.use("/users", userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})