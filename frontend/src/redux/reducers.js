import {
  CLEAR_ERRORS,
  CREATE_TODO_FAIL,
  CREATE_TODO_REQUEST,
  CREATE_TODO_RESET,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_RESET,
  DELETE_TODO_SUCCESS,
  GET_TODO_FAIL,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_RESET,
  UPDATE_TODO_SUCCESS,
} from "./constants";

export const addTodoReducer = (state = { todo: {} }, action) => {
  switch (action.type) {
    case CREATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TODO_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        todo: action.payload.todo,
      };
    case CREATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_TODO_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getTodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        todos: [],
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case GET_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const editTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TODO_REQUEST:
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_TODO_FAIL:
    case UPDATE_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_TODO_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case UPDATE_TODO_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
