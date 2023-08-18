import http from "./axiosContext"

const create = (data) => {
    return http.post('/products')
}

const GetAll = () => {
    return http.get("/products")
}

const GetOne = (id) => {
    return http.get(`/products/${id}`)
}

const update = (id, data) => {
    return http.put(`/products/${id}, ${data}`)
}

const remove = (id) => {
    return http.delete(`/products/${id}`)
}

export default {create, GetAll, GetOne, update, remove}