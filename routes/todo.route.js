import express from "express";
import { createTodo, deleteTodo, getTodo,getTodoById, updateTodo, } from "../controllers/todo.controller.js";

const todoRouter = express.Router()

todoRouter.get("/all-todo",getTodo)

todoRouter.get("/get-todo/:id",getTodoById)

todoRouter.post("/create-todo",createTodo)

todoRouter.put("/update-todo",updateTodo)

todoRouter.delete("/delete-todo",deleteTodo)


export default todoRouter




// {
//     todo: 'This is todo',
//     isCompleted: false,
//     _id: new ObjectId('67ecee6edd9a8c70567f0efb'),
//     createdAt: 2025-04-02T07:59:42.963Z,
//     updatedAt: 2025-04-02T07:59:42.963Z,
//     __v: 0
//   }