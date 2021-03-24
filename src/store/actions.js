import axios from 'axios';

export const logUserIn = ({commit}, {email, password}) => {
    console.log(email)
    axios.post('auth/login', {email, password})
        .then(response => {
            commit('LOGIN_USER_IN', response.data);
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        })
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

// axios.post("http://localhost:8004/api/v1/getdata", {"action" : "dashboard"}, {
//    headers: {
//       Authorization: 'Bearer ' + token,
//    }
// })

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
            console.log(response.data);
        })
}
