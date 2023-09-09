import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import holderReducer from "./Holder";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(holderReducer, composedEnhancer);
export default store;
