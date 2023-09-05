import { useEffect } from "react";
import "./App.css";
import AddToDo from "./Components/AddToDo";
import AllToDos from "./Components/AllToDos.js";
import { clearErrors, getTodos } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { error, todos } = useSelector((state) => state.getTodos);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getTodos());
  }, [dispatch, error]);

  return (
    <main>
      <h1>Your To-Do List</h1>
      <AddToDo />

      <div className="container" id="container">
        {todos && todos.map((todo) => <AllToDos todo={todo} />)}
      </div>

    </main>
  );
}

export default App;
