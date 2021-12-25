const express = require("express")
const mongoose = require("mongoose")
const app = express()
mongoose.connect('mongodb://localhost:27017/lab04')

console.log(mongoose.connection.readyState)

app.use(express.json())
const todosRoutes = require("./routes/todo")
const usersRoutes = require("./routes/users")


app.use('/todos',todosRoutes)
app.use('/users',usersRoutes)


app.listen(3000,()=>{
    console.log("tamam");
    })