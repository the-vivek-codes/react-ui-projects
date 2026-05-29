export const getUsers = () => {
  return JSON.parse(localStorage.getItem('users')) || []
}
export const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users))
}
export const setCurrentUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user))
}
export const getNotes = () => {
  return JSON.parse(localStorage.getItem('notes')) || []
}
export const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}