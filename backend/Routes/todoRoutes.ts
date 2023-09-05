import { Router } from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../Controller/todoController';

const router: Router = Router();

router.route('/addTodo').post(createTodo);

router.route('/getTodos').get(getTodos);

router.route('/updateTodo/:id').put(updateTodo);

router.route('/deleteTodo/:id').delete(deleteTodo);

export default router;
