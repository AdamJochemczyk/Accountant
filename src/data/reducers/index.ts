import {combineReducers} from "redux";
import companyData from './companyData.reducer';

const rootReducer=combineReducers({
    companyData,
});

export default rootReducer;