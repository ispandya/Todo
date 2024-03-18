
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ispandya:n6vrJAZG@cluster0.8igw9fo.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

//momgodb sschema
/*
    Todo{
        title: string,
        description: string,
        completed: boolean
    }

*/

//my mongodb url: mongodb+srv://ispandya:n6vrJAZG@cluster0.8igw9fo.mongodb.net/


