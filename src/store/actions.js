import axios from 'axios';

export const logUserIn = ({commit}, {email, password}) => {
    axios.post('auth/login', {email, password})
        .then(response => {
            commit('LOGIN_USER_IN', {
                name: response.data.user_name,
                email: response.data.user_email
            });
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
        })
}