import { combineReducers } from "redux";
import CarsReducer from "./car.js";

const rootReducer = combineReducers({
    cars: CarsReducer
})

export default rootReducer
