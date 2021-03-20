import axios from 'axios';

export const logUserIn = ({commit}, {email, password}) => {
    axios.post('auth/login', {email, password})
        .then(response => {
            commit('LOGIN_USER_IN', response.data);
            localStorage.setItem('token', response.data.token);
        })
}