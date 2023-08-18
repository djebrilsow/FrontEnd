import http from "./axiosContext"

const create = (data) => {
    return http.post('/categories')
}

const GetAll = () => {
    return http.get("/categories")
}

const GetOne = (id) => {
    return http.get(`/categories/${id}`)
}

const update = (id, data) => {
    return http.put(`/categories/${id}, ${data}`)
}

const remove = (id) => {
    return http.delete(`/categories/${id}`)
}

export default {create, GetAll, GetOne, update, remove}