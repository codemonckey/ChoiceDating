import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertDate = payload => api.post(`/date`, payload)
export const getAllDates = () => api.get(`/dates`)
export const updateDateById = (id, payload) => api.put(`/date/${id}`, payload)
export const deleteDateById = id => api.delete(`/date/${id}`)
export const getDateById = id => api.get(`/date/${id}`)

const apis = {
    insertDate,
    getAllDates,
    updateDateById,
    deleteDateById,
    getDateById,
}

export default apis