import { legacy_createStore } from "redux";
import Reducer from "../reducer/reducer";

let store = legacy_createStore(reducer);

export default store;