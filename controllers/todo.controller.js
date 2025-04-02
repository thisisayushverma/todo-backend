import Todo from "../schema/todo.schema.js"


const getTodo = async(req,res,next)=>{
    try {
        const allTodo = await Todo.find()

        res.status(200).json({
            success: true,
            message: "All Todo",
            data: allTodo
        })
    } catch (error) {
        next(error)
    }
    
}   

const getTodoById =async (req,res,next)=>{
    const {id} = req.params
    if(!id){
        const error = new Error("Id is required")
        error.status = 401
        next(error)
    }
    try {
        const singleTodo =await Todo.findById(id)
        if(!singleTodo){
            const error = new Error("Todo not found")
            error.status = 404
            next(error)
        }
        res.status(200).json({
            success: true,
            message: "Single Todo",
            data: singleTodo
        })

    } catch (error) {
        throw error
    }
}

const createTodo =async (req,res,next)=>{
    const {todoContent} = req.body;
    if(!todoContent){
        const error = new Error("Todo content is required")
        error.status = 401
        next(error)
    }
    try {
        const createTodo = await Todo.create({
            todo: todoContent
        })
        res.status(200).json({
            success: true,
            message: "Todo created successfully",
            data: createTodo
        })
        console.log(createTodo);
    } catch (error) {
        next(error)
    }

}

const updateTodo =async (req,res,next)=>{
    const {id,todoContent,isCompleted} = req.body;
    if(!id || !todoContent || !isCompleted){
        const error = new Error("All fields are required")
        error.status = 401    
        next(error)
    }

    try {
        const updateTodo = await Todo.findByIdAndUpdate(
            id,{
                todo: todoContent,
                isCompleted: isCompleted
            },{
                new: true
            }
        )

        if(!updateTodo){
            const error = new Error("Todo not found")
            error.status = 404
            next(error)
        }
        
        console.log(updateTodo);
        res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data: updateTodo
        })
    } catch (error) {
        next(error)
    }
}

const deleteTodo = async (req,res,next)=>{
    const {id} = req.body;
    if(!id){
        const error = new Error("Id is required")
        error.status = 401
        next(error)
    }

    try {
        const deleteTodo = await Todo.findByIdAndDelete(id);
        if(!deleteTodo){
            const error = new Error("Todo not found")
            error.status = 404
            next(error)

        }

        console.log(deleteTodo);

        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
            data: deleteTodo
        })


    } catch (error) {
        next(error)
    }
}



export{
    getTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}