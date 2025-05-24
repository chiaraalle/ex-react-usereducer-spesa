/*
/*
📌 Milestone 2: Aggiungere prodotti al carrello
Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
Al click del bottone, usa una funzione addToCart per:
Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
Se il prodotto è già nel carrello, ignora l’azione.
Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
Per ogni prodotto nel carrello, mostra:
Nome
Prezzo
Quantità

Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.
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
        return state; // Se esiste già,lo stato rimane immutato
      }
      // Se non esiste, lo aggiungo con quantity = 1
      return [...state, { ...action.payload, quantity: 1 }];
    default:
      return state;
    }
}


function ProductList( { products } ){

    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
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
        <Cart cartItems={cartItems} />
        </>
    )
}

export default ProductList;