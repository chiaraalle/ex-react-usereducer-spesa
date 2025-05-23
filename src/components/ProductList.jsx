/*
 Milestone 1: Mostrare la lista dei prodotti
1. Parti dall’array products fornito:
const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];
Crea un componente che mostra la lista dei prodotti.
Per ogni prodotto, mostra:
Nome
Prezzo

Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.*/

function ProductList( { products } ){

    return(
        <>
        <h1>I nostri prodotti</h1>
        <ul> 
            { products.map((product, i) => (
                <li key = {i}>
                    <h3>Nome: {product.name}</h3>
                    <p>Prezzo: {product.price}</p>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ProductList;