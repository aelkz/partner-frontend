import Vue from 'vue'

export default {
    getAllProducts(cb, errorCb) {
        Vue.http.get('product').then(response => {
            cb(response.body)
        }, response => {
            errorCb(response.body)
        })
    },
    buyProducts(products, cb, errorCb) {
        Vue.http.post('order', products, { headers: {'Content-Type': 'application/json'}}).then(response => {
            cb(response.body)
        }, response => {
            errorCb(response.body)
        })
    }
}
