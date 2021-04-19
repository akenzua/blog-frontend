import axios from 'axios';


export const logUserIn = ({commit}, {email, password}) => {
    console.log(email)
    axios.post('auth/login', {email, password})
        .then(response => {
            commit('LOGIN_USER_IN', response.data);
            commit('IS_LOGGED_IN', true);
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        })
        commit('IS_LOGGED_IN', true);
}
export const submitComment = ( {commit},{content, blog_id}) => {
    console.log(content, blog_id)
    axios.post('comment', {content, blog_id},{
        headers: {
            Authorization: 'Bearer' + localStorage.getItem('token')
        }
    })
        .then(response => {
            response.data.comment['user'] = JSON.parse(localStorage.getItem('user'))
            console.log(response.data)
            commit('UPDATE_COMMENT', response.data);
            
        })
}
export const submitReply = ({commit},{content, blog_id, comment_id}) => {
    console.log(content, blog_id, comment_id)
    axios.post('reply', {content, blog_id, comment_id},{
        headers: {
            Authorization: 'Bearer' + localStorage.getItem('token')
        }
    })
        .then(response => {
            response.data.reply['user'] = JSON.parse(localStorage.getItem('user'))
            console.log(response.data)
            commit('UPDATE_REPLY', response.data.reply);
            
        })
}


export const getBlogList = async ({commit}) => {
    commit('LOADING', true)
    axios.get('blog')
        .then(response => {
            commit('GET_BLOGS', response.data);
            commit('LOADING', false)
        })
}

export const getBlog = async ({commit}, slug) => {
    console.log(slug)
    commit('LOADING', true)
    axios.get(`blog/${slug}`,)
        .then(response => {
            commit('GET_BLOG', response.data);
            commit('LOADING', false)

            let comments = response.data[0].comment;
            let replies = response.data[0].reply;

            let computedComment = replies.reduce((acc, value) => {
              
               return acc.filter((comment) => {
                    if(comment.id === value.comment_id){
                        if("reply"in comment){
                           return comment["reply"].push(value)
                        }
                        comment["reply"] = [value]
                    }
                 return comment
                   
                })
            }, comments)
            console.log(computedComment)
            commit('COMPUTED_COMMENT', computedComment);
        })
}

export const openMobileMenu = ({commit}) => {
    commit('OPEN_MENU')
}
