import state from "./state";

export const userInfo = (state) => {
    return state.user;
}
export const loading = (state) => {
    return state.loading;
}
export const getBlogs = (state) => {
    return state.blogs;
}

export const getComments = () => {
    return state.comments;
}

export const getOpen = () => {
    return state.isOpen
}

export const getLogIn = () => {
    return state.isLoggedIn
}