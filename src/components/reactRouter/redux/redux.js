const redux = require('redux');

const vitualState = {
    arr: ["a", "b"],
    status: true,
}

const reducer = (state = vitualState, action) => {
    switch (action.type) {
        case "changeStatus":
            return { ...state, status: !state.status }
        case "add":
            return { ...state, arr: [...state.arr, action.element] }
        case "delete":
            return { ...state, arr: state.arr.filter((value, key) => key !== action.index) }
        default:
            return state
    }
}

const storage = redux.createStore(reducer)

// //theo doi khi state thay doi
// storage.subscribe(() => {
//     console.log(storage.getState())
// })
// //change
// storage.dispatch({
//     type: "changeStatus"
// })
// //add
// storage.dispatch({
//     type: "add",
//     element: "c",
// })
// //delete
// storage.dispatch({
//     type: "delete",
//     index: 1,
// })

export default storage;