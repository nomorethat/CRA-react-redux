import { combineReducers } from "redux";
import CarsReducer from "./car.js";
import ActiveCar from "./car-active";

const rootReducer = combineReducers({
    cars: CarsReducer,
    car: ActiveCar
})

export default rootReducer
