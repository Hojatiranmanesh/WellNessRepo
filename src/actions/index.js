export const login = (user) => {
    return {
        type: 'LOGIN',
        user
    }
}

export const logout = (user) => {
    return {
        type: 'LOGOUT',
        user
    }
}

export const setid = (user) => {
    return {
        type: 'SETID',
        user
    }
}

export const remid = (user) => {
    return {
        type: 'REMID',
        user
    }
}