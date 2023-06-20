const express = require("express");
const app = express();
const mongoose =  require("mongoose");
const {MONGO_DB_CONFIG} =  require("./config/app.config");
const cors = require('cors');

//CONNECTION TO MONGODB
mongoose.connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log('Connection to MongoDB Succesful');

}).catch((error) => {
    console.log('Error Connecting to MongoDB:', error);

} );

//Enable cors
app.use(cors());

//middleware to parse json data

app.use(express.json());

//define a route to fethc the data
app.use("/api", require("./router/app.route"));

//start the server
app.listen(8000, ()=> {
    console.log("Server started on port 8000");
}) 