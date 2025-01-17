const zod = require('zod');

const CreateTodo = zod.object({
    title: zod.string(),
    description: zod.string()
    }
)

const Updatetodo = zod.object({
    id: zod.string()
    }
)

module.exports = {
    createTodo: createTodo,
    Updatetodo: Updatetodo
    }