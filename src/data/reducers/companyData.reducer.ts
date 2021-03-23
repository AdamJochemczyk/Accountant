import {
  SET_DEFAULT_VALUES,
  GET_VALUES_FROM_DB,
  UPDATE_VALUES_IN_DB,
} from "../constants";

const initialState = {
  seller: {
    name: "",
    address: "",
    NIP: "",
  },
  accountNumber: "",
};

function companyData(state = initialState, action) {
  switch (action.type) {
    case SET_DEFAULT_VALUES:
      return {
        initialState,
      };
    case GET_VALUES_FROM_DB:
      return {
        ...state,
        seller: action.payload,
      };
    case UPDATE_VALUES_IN_DB:
      return {
        ...state,
        seller: action.payload,
      };
    default:
      return state;
  }
}
export default companyData;
