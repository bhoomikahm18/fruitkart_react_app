const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3300, ()=>{
    console.log("Backend Application Running on 3300");
});