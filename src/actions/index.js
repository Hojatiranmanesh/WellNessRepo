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

export const setDimension = (dimension) => {
    return {
        type: 'SET_DIMENSION',
        dimension
    }
}

export const setQuiz = (quiz) => {
    return {
        type: 'SET_QUIZ',
        quiz
    }
}

export const hideNav = (nav) => {
    return {
        type: 'HIDE_NAV',
        nav
    }
}

export const showNav = (nav) => {
    return {
        type: 'SHOW_NAV',
        nav
    }
}