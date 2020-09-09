import { ADD_COMMENT } from '../types';

const initialState = {
  list: [],
};

export const commentsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return { ...state };
  }
};
