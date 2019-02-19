import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../constants/ActionTypes'
import _products from '../api/products.json'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    return {
      ...state,
      inventory: state.inventory - 1
    }
    case INCREMENT_QUANTITY:
    return {
      ...state,
      inventory: state.inventory - 1
    }
    case DECREMENT_QUANTITY:
    return {
      ...state,
      inventory: state.inventory + 1
    }
    case REMOVE_FROM_CART:
      const initialStateProduct = _products.filter(item => item.id === action.productId)
      const initialStateInventory = initialStateProduct[0].inventory
      return {
        ...state,
        inventory: initialStateInventory
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
