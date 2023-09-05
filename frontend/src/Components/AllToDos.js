import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, deleteTodo, updateData } from "../redux/actions";
import { DELETE_TODO_RESET, UPDATE_TODO_RESET } from "../redux/constants";

const AllToDos = ({ todo }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState("");

  const { error, isDeleted, isUpdated } = useSelector((state) => state.editTodo);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      dispatch({ type: DELETE_TODO_RESET });

      // Refresh the page
      window.location.reload();
    }

    if(isUpdated) {
        dispatch({ type: UPDATE_TODO_RESET }); 
    }
  }, [dispatch, error, isDeleted, isUpdated]);

  const deleteHandler = (id) => {
    if (id) {
      dispatch(deleteTodo(id));
    }
  };

  const updateHandler = (todoId, text) => {
    setEditMode(todoId);
    setEditedText(text);
  };

  const updateTodoHandler = (todoId, newtodo) => {
    if (todoId && newtodo) {
      dispatch(updateData(todoId, { todo: newtodo }));
      setEditMode(null);
      window.location.reload();
    }
  };

  return (
    <div className="myTodos">
      {editMode === todo._id ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={() => updateTodoHandler(todo._id, editedText)}>
            save
          </button>
        </>
      ) : (
        <>
          {todo.todo}
          <div>
            <MdEdit
              className="myIcons"
              onClick={() => updateHandler(todo._id, todo.todo)}
            />
            <MdDelete
              className="myIcons"
              onClick={() => deleteHandler(todo._id)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AllToDos;
