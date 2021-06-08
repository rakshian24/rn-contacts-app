import { LOGIN } from '../../constants/actionTypes';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return state;

    default:
      state;
  }
};

export default authReducer;
