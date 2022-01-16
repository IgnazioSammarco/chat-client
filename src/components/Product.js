import React from 'react'

function Product(props) {
	const {product, onAdd} = props;
	return (
		<div>
			<img className="small" src={product.image}></img>
			<h3>{product.name}</h3>
			<p>Prezzo: {product.price}</p>
			<p>Origine: {product.origin}</p>
			<button className='button-32' onClick={onAdd(product)}>
				Aggiungi al carrello</button>
		</div>
	)
}

export default Product
