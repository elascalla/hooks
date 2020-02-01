import React, { useReducer } from 'react';

interface Cart {
  products: string[];
  shipping_value?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppReducer: React.FC = () => {
  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch(action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'Produto novo']
          }
        case "REMOVE_PRODUCT":
          return state;
        default: 
          return state;
      }
    },
    {
      products: ['asd'],
      shipping_value: 0
    },
  );

  return (
    <div />
  );
}

export default AppReducer;
