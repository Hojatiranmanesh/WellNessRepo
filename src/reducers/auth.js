const authentication = (state = "", action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = action.user
        case 'LOGOUT':
            return state = {}
        default:
            return state
    }
};

export default authentication;