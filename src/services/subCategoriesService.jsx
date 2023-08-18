import http from "./axiosContext"

const create = (data) => {
    return http.post('/sub-categories')
}

const GetAll = () => {
    return http.get("/sub-categories")
}

const GetOne = (id) => {
    return http.get(`/sub-categories/${id}`)
}

const update = (id, data) => {
    return http.put(`/sub-categories/${id}, ${data}`)
}

const remove = (id) => {
    return http.delete(`/sub-categories/${id}`)
}

export default {create, GetAll, GetOne, update, remove}