import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";
import matchReducer from "../features/matchSlice";

export default configureStore({
  reducer: {
  user: userReducer,
  app: appReducer,
  match: matchReducer,
}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
