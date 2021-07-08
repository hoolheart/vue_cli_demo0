export const logIn = ({ dispatch, store }, userId, sessionId, userEmail, userName) => {
  dispatch('LOG_IN', userId, sessionId, userEmail, userName)
}

export const logOut = ({ dispatch, store }) => {
  dispatch('LOG_OUT')
}
