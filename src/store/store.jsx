import { legacy_createStore } from "redux";
import authReducer from "../reducer/authreducer";
import Reducer from "../reducer/reducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
}

const reducers = combineReducers({
    reducer: Reducer,
    authReducer: authReducer
});

const persistReducer = persistReducer(persistConfig, reducers)

let store = legacy_createStore(reducer);
let persistor = persistConfig(Store);

export default {persistor, store};