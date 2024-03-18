
const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports= {
    createTodo: createTodo,
    updateTodo: updateTodo
}

//ZOD inputs(schema) that we expect from the user
/*
    POST:
    {
        title: string,
        description: string,
    }
    GET:
    just get nothing required
    PUT:
    {
        id:string,
    }






*/



