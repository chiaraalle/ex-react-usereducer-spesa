/*
📌 Milestone 3: Modificare il carrello
Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
Sotto alla lista del carrello, mostra il totale da pagare:
Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.
Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.
*/

import { FaShoppingCart } from "react-icons/fa";
import { useReducer } from "react";
import Cart from './Cart';

//definisco il reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        // Controllo se il prodotto è già nel carrello
      const existingProduct = state.find(item => item.name === action.payload.name);
      if (existingProduct) {
       return state.map(item => 
                    item.name === action.payload.name 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ); // Se esiste già, aggiorno la quantità
      }
      // Se non esiste, lo aggiungo con quantity = 1
      return [...state, { ...action.payload, quantity: 1 }];

       case 'UPDATE_QUANTITY':
            return state.map(item => 
                item.name === action.payload.name 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

         case 'REMOVE_ITEMS':
                return state.filter(item => item.name !== action.payload.name);
        

    default:
      return state;
    }
}


function ProductList( { products } ){

    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };


  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_ITEMS', payload: product });
};

    return(
        <>
        <h1>I nostri prodotti</h1>
        <ul> 
            { products.map((product, i) => (
                <li key = {i}>
                    <h3>Nome: {product.name}</h3>
                    <p>Prezzo: {product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>
                        <FaShoppingCart style={{marginRight: '5px'}}/>
                        Aggiungi al carrello 
                    </button>
                </li>
            ))}
        </ul>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </>
    )
}

export default ProductList;