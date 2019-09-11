const initialState = {
    user: "Test User",
    year: 2019
}

export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case "SET_YEAR":
            return {...state, year: action.payload}
        default:
            return state
    }
}
