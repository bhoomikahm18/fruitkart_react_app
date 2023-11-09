const express = require('express');
const cors = require("cors");
const productsRouter = require('./routes/productsRoute.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use(productsRouter);

app.listen(3300, ()=>{
    console.log("Backend Application Running on 3300");
});