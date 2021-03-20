export const LOGIN_USER_IN = (state, user) => {
    state.user = {
        name: user.user_name,
        email: user.user_email
    };
}