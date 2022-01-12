import React from 'react'

function Product(props) {
	return (
		<div key={props.product.id}>
			<img className="small" src={props.product.image}></img>
			<h3>{props.product.name}</h3>
			<p>Prezzo: {props.product.price}</p>
			<button className='button-32'>Aggiungi al carrello</button>
		</div>
	)
}

export default Product
