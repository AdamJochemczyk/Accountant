import {
  SET_DEFAULT_VALUES,
  GET_VALUES_FROM_DB,
  UPDATE_VALUES_IN_DB,
} from "../constants";

const companydata = {
  seller: {
    name: "",
    address: "",
    NIP: "",
  },
  accountNumber: "",
  paymentMethod: "",
};

function companyData(state = companydata, action) {
  switch (action.type) {
    case SET_DEFAULT_VALUES:
      return {
        companydata,
      };
    case GET_VALUES_FROM_DB:
      return {
        ...action.payload,
      };
    case UPDATE_VALUES_IN_DB:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
export default companyData;
