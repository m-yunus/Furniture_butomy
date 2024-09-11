import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_CART_ITEM,
    DECREASE_CART_ITEM,
    EMPTY_CART
  } from './cartactionType';
  
  // Define types for actions
  interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: {
      productId: number;
      title: string;
      price: number;
      quantity: number;
      image: string;
      color: string;
    };
  }
  
  interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: number; // productId
  }
  
  interface IncreaseCartItemAction {
    type: typeof INCREASE_CART_ITEM;
    payload: number; // productId
  }
  
  interface DecreaseCartItemAction {
    type: typeof DECREASE_CART_ITEM;
    payload: number; // productId
  }
  
  interface EmptyCartAction {
    type: typeof EMPTY_CART;
  }
  
  // Union type for all cart actions
  
  // Action creators
  export const addToCart = (item: {
    productId: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    color: string;
  }): AddToCartAction => ({
    type: ADD_TO_CART,
    payload: item,
  });
  
  export const removeFromCart = (productId: number): RemoveFromCartAction => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  
  export const increaseCartItem = (productId: number): IncreaseCartItemAction => ({
    type: INCREASE_CART_ITEM,
    payload: productId,
  });
  
  export const decreaseCartItem = (productId: number): DecreaseCartItemAction => ({
    type: DECREASE_CART_ITEM,
    payload: productId,
  });
  
  export const emptyCart = (): EmptyCartAction => ({
    type: EMPTY_CART,
  });
  