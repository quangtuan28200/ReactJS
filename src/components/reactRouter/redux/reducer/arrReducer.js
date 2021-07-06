const initialState = ['a', 'b']

const arrReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.element]
        case "delete":
            return state.filter((value, key) => key !== action.index)
        default:
            return state
    }
}

export default arrReducer