export const CheckEmpty = (str) => (str === 'undefined' || !str || !/[^\s]/.test(str))

export const ValidateEmail = (email) => {
  const re = /^\w+@\w+(\.\w+)+$/
  return re.test(email)
}
