import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

export function receiveProducts(products) {
  return async function(dispatch) {
    const res = await fetch('http://tech.work.co/shopping-cart/products.json')
    const newProducts = await res.json()
    return dispatch({
      type: types.RECEIVE_PRODUCTS,
      products: newProducts
    })
  }
}

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

const removeItemFromCart = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

export const removeFromCart = productId => dispatch => {
  dispatch(removeItemFromCart(productId))
}

const incrementQuantityInCart = productId => ({
  type: types.INCREMENT_QUANTITY,
  productId
})

export const incrementQuantity = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(incrementQuantityInCart(productId))
  }
}

const decrementQuantityInCart = productId => ({
  type: types.DECREMENT_QUANTITY,
  productId
})

export const decrementQuantity = productId => (dispatch, getState) => {
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(decrementQuantityInCart(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
