export const setStorage = (x) => {
  if (x) {
    localStorage.setItem('user', JSON.stringify(x))
  }
}

export const getFromStorage = () => {
  let user = localStorage.getItem('user')
  const test = user ? JSON.parse(user) : null
  return test
}

export const removeStorage = (user) => localStorage.removeItem(user)
