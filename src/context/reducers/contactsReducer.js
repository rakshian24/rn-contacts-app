import { GET_CONTACTS } from '../../constants/actionTypes';

const contactsReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return state;

    default:
      state;
  }
};

export default contactsReducer;
