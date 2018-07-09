<template>
  <div class="container">
    <div class="row">
      <div id="available" class="col-6">
        <h4 class="display-6">Lista de produtos disponíveis <button type="button" class="btn btn-link" @click="getAllProducts()">Atualizar</button></h4>
        <div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Detalhes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prod in products" :key="prod.id">
                <td>
                  <h6>Nome</h6><p>{{prod.name}}</p>
                  <h6>Loc.</h6><p>{{prod.location}}</p>
                  <h6>Qtd. por Lote</h6><p>{{prod.minAmount}}</p>
                </td>
                <td><button class="btn btn-primary btn-sm" @click="addProductToCart(prod)">Adicionar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="selected" class="col-6">
        <h4 class="display-6">Carrinho de compras</h4>
        <div v-if="cartItems.length">
          <table class="table table-hover border">
            <thead>
              <tr>
                <th>Detalhes</th>
                <th>Quantidade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prod in cartItems" :key="prod.id">
                <td>{{prod.name}}</td>
                <td>{{prod.amount}}</td>
                <td><button class="btn btn-primary btn-sm" @click="removeProductFromCart(prod)">Remover</button></td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary btn-sm" @click="checkout()">Finalizar</button>
        </div>
        <p v-else>
          Nenhum produto foi adicionado
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
