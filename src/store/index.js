import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../auth'
import cart from './modules/cart'
import products from './modules/products'

export const CART_MODULE = 'cart'
export const PRODUCTS_MODULE = 'products'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        products
    },
    state: {
        currentRoute: window.location.pathname,
        title: 'Partner Store Application',
        loggedIn: auth.loggedIn()
    }
})