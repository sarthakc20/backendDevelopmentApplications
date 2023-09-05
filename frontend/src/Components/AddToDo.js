import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createTodo } from "../redux/actions";
import { CREATE_TODO_RESET } from "../redux/constants";

const AddToDo = () => {
  const dispatch = useDispatch();

  const { error, success } = useSelector((state) => state.addTodo);

  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Todo Added Successfully");
      dispatch({ type: CREATE_TODO_RESET });

      // Refresh the page
    window.location.reload();
    }
  }, [dispatch, error, success]);

  const submitTodo = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("todo", todo);

    dispatch(createTodo(myForm));
  };

  return (
    <>
      <form onSubmit={submitTodo} className="todoCard">
        <input
          type="text"
          className="todoInput"
          placeholder="Add Your Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="todobtn">
          Add <MdAddCircle />
        </button>
      </form>
    </>
  );
};

export default AddToDo;
