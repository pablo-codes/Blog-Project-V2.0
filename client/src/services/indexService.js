import http from '../http-common'

const index = (id) => {
    return http.get(`/index/${id}`)
}
const edit = (id) => {
    return http.get(`/edit-user/${id}`)
}
const update = (id) => {
    return http.get(`/update-user/${id}`)
}
const profile = (id, data) => {
    return http.post(`/profile/${id}`, data)
}
const indexService = { index, edit, update, profile }
export default indexService