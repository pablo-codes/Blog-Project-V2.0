import http from '../http-common'

const getAll = () => {
   return http.get("/all-blogs")
}
const registerUser = (data) => {
   return http.post('/register-user', data)
}
const loginUser = (data) => {
   return http.post("/login-user", data)
}
const update = (id, data) => {
   return http.put(`/edit-topic/${id}`, data)
}
const updateImages = (id, data) => {
   return http.put(`/edit-image/${id}`, data)
}
const get = (id) => {
   return http.get(`/get-topic/${id}`)
}
const getImages = (id) => {
   return http.get(`/get-image/${id}`)
}
const console = (data) => {
   return http.post(`/console`, data)
}

const blogService = { getAll, get, update, getImages, updateImages, registerUser, loginUser, console }
export default blogService