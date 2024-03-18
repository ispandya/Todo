// Basic express boilerplate code,with
// express.json() middleware

const express = require("express");
const app = express();

//imports
const {createTodo}= require("./types");
const {todo} = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());



app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs",
        })
        return;
    }
    //else put it(post it) in mongoDB
    //added async await later for efficiency
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg: "Todo Created"
    })

})


app.get("/todos", async function(req,res){
    //async await is a MUST for all get
    const todos = await todo.find({});
    res.json({
        todos
    })

})

app.put("/completed",async function(req,res) {
        const updatePayload = req.body;
        const parsedPayload = updateTodo.safeParse(updatePayload);
        if(!parsedPayload.success){
            res.status(411).json({
                msg: "You send the wrong inputs",
            })
            return;
        }
        await todo.update({
            _id: req.body.id
        },{
            completed: true
        })
        res.json({
            msg: "Todo marked as Completed"
        })
})



app.listen(3000);





//Body of POST:
//body{
//     title: string;
//     description: string;
// }
//Body of GET:
/*
        we did the body of the get very later after the db styff
*/
