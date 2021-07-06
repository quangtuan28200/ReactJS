const initialState = true

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case "changeStatus":
            return !state
        default:
            return state
    }
}

export default statusReducer