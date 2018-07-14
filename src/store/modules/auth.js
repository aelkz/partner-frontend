import { LOGIN, LOGOUT } from '../actions/auth'
import { GET_TOKEN, IS_LOGGED_IN } from '../getters/auth'
import Keycloak from '../../external/keycloak'
import keycloak_conf from '../../external/keycloak.json'

//Mutations
const SET_TOKEN = 'setToken'

const keycloak = new Keycloak(keycloak_conf)

const state = {
  token: keycloak.token,
  loggedIn: !!keycloak.token,
  resourceRoles: keycloak.resourceRoles,
  realmRoles: keycloak.realmRoles
}

const getters = {
  [GET_TOKEN]: (state) => {
    return state.loggedIn ? state.token : null
  },

  [IS_LOGGED_IN]: (state) => {
    return state.loggedIn
  }
}

const actions = {
    [LOGIN]: ({state, commit}, cb) => {
      keycloak.init({ onLoad: 'login-required' }).success(function(authenticated) {
        console.log(authenticated ? 'authenticated' : 'not authenticated');
        console.log(keycloak.tokenParsed)
        console.log('keycloak.resourceRoles=' + keycloak.tokenParsed.resource_access["partner-frontend"].roles)
        console.log('keycloak.realmRoles=' + keycloak.tokenParsed.realm_access.roles)
        commit(SET_TOKEN, keycloak.token, keycloak.tokenParsed.resource_access["partner-frontend"].roles, keycloak.tokenParsed.realm_access.roles)
        cb("success")
        keycloak.loadUserInfo().success(function(result) {

        }).error(function() {
          console.log('failed to initialize')
          commit(SET_TOKEN, null, null, null)
          cb("failed")
        })
      }).error(function() {
        console.log('failed to initialize')
        commit(SET_TOKEN, null, null, null)
        cb("failed")
      })
    },

    [LOGOUT]: ({ state, commit }) => {
      keycloak.logout(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+"/")
    }
}

const mutations = {
  [SET_TOKEN]: (state, token, resourceRoles, realmRoles) => {
    state.token = token
    state.loggedIn = !!token
    state.resourceRoles = resourceRoles
    state.realmRoles = realmRoles
  }
}

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}