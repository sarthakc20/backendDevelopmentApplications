import { Request, Response } from 'express';
import Todo, { ITodo } from "../Model/toDoModel";

// Create Todo
export const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo: ITodo = await Todo.create(req.body);

    res.status(201).json({
      success: true,
      todo,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get Todos
export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();

    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update Todo
export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo: ITodo | null = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    if (!todo) {
      res.status(404).json({ success: false, message: 'Todo not found' });
      return;
    }

    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a Todo
export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo: ITodo | null = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(404).json({ success: false, message: 'Todo not found' });
      return;
    }

    await todo.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Todo deleted successfully',
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
