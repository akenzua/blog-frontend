export const LOGIN_USER_IN = (state, user) => {
    state.user = {
        name: user.user_name,
        email: user.user_email
    };
}

export const GET_BLOGS = (state, blogs) => {
    state.blogs = blogs
}
export const GET_BLOG = (state, blog) => {
    state.blog = blog
}

export const LOADING = (state, newLoadingState) => {
    state.loading = newLoadingState;
}
export const UPDATE_COMMENT = (state, comment) => {
   
    state.blog[0].comment.unshift(comment.comment)
   
}

