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
   
    state.comments.unshift(comment.comment)
   
}

export const OPEN_MENU = (state) => {
    state.isOpen = !state.isOpen;
}

export const COMPUTED_COMMENT = (state, comment) => {
    state.comments = comment
}

export const UPDATE_REPLY = (state, reply) => {

    let comments = state.comments;
    console.log(reply.comment_id)
    comments.filter((comment) => {
        if(comment.id === reply.comment_id){
            if("reply"in comment){
                return comment["reply"].push(reply)
            }
            comment["reply"] = [reply]
        }
        return comment
    })

}

export const IS_LOGGED_IN = (state, login) => {
    state.isLoggedIn = login
    console.log(login)
}

