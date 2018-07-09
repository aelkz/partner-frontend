import { GET_ALL_PRODUCTS } from '../actions/products'
import backend from '../../api/backend'

// Mutations
const SET_PRODUCTS = 'setProducts'

const state = {
    products: []
}

const getters = {}

const actions = {
    [GET_ALL_PRODUCTS]: ({ commit }) => {
        backend.getAllProducts(products => {
            commit(SET_PRODUCTS, products)
        })
    }
}

const mutations = {
    [SET_PRODUCTS]: (state, products) => {
        state.products = products
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}