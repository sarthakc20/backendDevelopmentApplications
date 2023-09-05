import axios from "axios";
import {
    CLEAR_ERRORS,
  CREATE_TODO_FAIL,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  GET_TODO_FAIL,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
} from "./constants";

// Create Todo
export const createTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_TODO_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/addTodo`, todo, config);

    dispatch({
      type: CREATE_TODO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TODO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Todo
export const getTodos = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TODO_REQUEST });

    const { data } = await axios.get(`/api/v1/getTodos`);

    dispatch({ type: GET_TODO_SUCCESS, payload: data.todos });
  } catch (error) {
    dispatch({ type: GET_TODO_FAIL, payload: error.response.data.message });
  }
};

// Update Todo
export const updateData = (id, todo) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_TODO_REQUEST,
    });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`api/v1/updateTodo/${id}`, todo, config);

    dispatch({ type: UPDATE_TODO_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_TODO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete a Row
export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TODO_REQUEST,
    });

    const { data } = await axios.delete(`api/v1/deleteTodo/${id}`);

    dispatch({ type: DELETE_TODO_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_TODO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
