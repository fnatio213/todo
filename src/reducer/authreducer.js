let initialState = {
    authUsers: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_AUTHUSER":
            return {...state, authUsers: action.payload}

            default : return state
    }
}

export default authReducer