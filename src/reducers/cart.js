import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  DISPLAY_CART,
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  isActive: false
}

const letsDisplayCart = (state, action) => {
  switch (action.type) {
    case DISPLAY_CART:
      return state = action.newStatus
    default:
      return state
  }
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:
      return state.filter(item => item !== action.productId)
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      let newState = Object.assign({}, state, {})
      delete newState[action.productId]
      return newState
    case INCREMENT_QUANTITY:
      return { ...state,
        [action.productId]: (state[action.productId] || 0) + 1
      }
    case DECREMENT_QUANTITY:
      return { ...state,
        [action.productId]: (state[action.productId] || 0) - 1
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        isActive: letsDisplayCart(state.isActive, action)
      }
  }
}

export default cart
