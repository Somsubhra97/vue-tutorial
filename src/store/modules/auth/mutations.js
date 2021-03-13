export default {
  setUser(state, payload) {//used both for login and logout
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
};