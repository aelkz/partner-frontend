<template>
  <div class="container">
    <div class="row">
      <div id="available" class="col-6">
        <div>
          <h4 class="display-6">Available products list <button type="button" class="btn btn-link" @click="getAllProducts()">Atualizar</button></h4>
          <div v-if="productsError != null">
            <b-alert show variant="danger" dismissible fade>There was an error to update the product list!</b-alert>
          </div>
          <table v-if="products != null" class="table table-hover">
            <thead>
              <tr>
                <th>Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prod in products" :key="prod.id">
                <td>
                  <h6>Name</h6><p>{{prod.name}}</p>
                  <h6>Loc.</h6><p>{{prod.location}}</p>
                  <h6>Batch amount</h6><p>{{prod.minAmount}}</p>
                </td>
                <td><button class="btn btn-primary btn-sm" @click="addProductToCart(prod)">Add</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="selected" class="col-6">
        <h4 class="display-6">Shopping cart</h4>
        <div v-if="checkoutError != null">
          <b-alert show variant="danger" dismissible fade>There was an error to finalize the order!</b-alert>
        </div>
        <div v-if="cartItems.length">
          <table class="table table-hover border">
            <thead>
              <tr>
                <th>Details</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prod in cartItems" :key="prod.id">
                <td>{{prod.name}}</td>
                <td>{{prod.amount}}</td>
                <td><button class="btn btn-primary btn-sm" @click="removeProductFromCart(prod)">Remove</button></td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary btn-sm" @click="checkout()">Go to checkout</button>
        </div>
        <p v-else>
          No product has been added!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { CART_MODULE, PRODUCTS_MODULE } from '../store'
import { CHECKOUT, ADD_PRODUCT_TO_CART, REMOVE_PROUDCT_FROM_CART } from '../store/actions/cart'
import { GET_ALL_PRODUCTS } from '../store/actions/products'
import { CART_ITEMS } from '../store/getters/cart'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      products: state => state.products.products,
      productsError: state => state.products.error,
      checkoutError: state => state.cart.error
    }),
    ...mapGetters(CART_MODULE, {
      cartItems: CART_ITEMS
    })
  },
  methods: {
    ...mapActions(CART_MODULE, [
      ADD_PRODUCT_TO_CART,
      REMOVE_PROUDCT_FROM_CART,
      CHECKOUT
    ]),
    ...mapActions(PRODUCTS_MODULE, [
      GET_ALL_PRODUCTS
    ])
  },
  created () {
    this.$store.dispatch(PRODUCTS_MODULE + '/' + GET_ALL_PRODUCTS)
  }
}
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

#available {
  overflow-y: scroll;
}

#selected {
    overflow-y: scroll;
}
</style>
