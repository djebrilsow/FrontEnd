import http from "./axiosContext"

const create = (data) => {
    return http.post('/auths')
}

const GetAll = () => {
    return http.get("/auths")
}

const GetOne = (id) => {
    return http.get(`/auths/${id}`)
}

const update = (id, data) => {
    return http.put(`/auths/${id}, ${data}`)
}

const remove = (id) => {
    return http.delete(`/auths/${id}`)
}

export default {create, GetAll, GetOne, update, remove}