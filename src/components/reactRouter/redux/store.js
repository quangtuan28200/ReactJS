import arrReducer from './reducer/arrReducer';
import statusReducer from './reducer/statusReducer';

const redux = require('redux');

const reducers = redux.combineReducers({
    arr: arrReducer,
    status: statusReducer,
})

const storage = redux.createStore(reducers)

//theo doi khi state thay doi
storage.subscribe(() => {
    console.log(storage.getState())
})

export default storage;