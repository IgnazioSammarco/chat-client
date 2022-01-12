import React from 'react'
import "./Basket.css";

function Basket(props) {
	const {cartItems} = props;
	return (
		<aside className='block col-1'>
			<h2>Carrello</h2>
			<div>
				{cartItems.length === 0 && <div>Il carrello è vuoto</div>}
			</div>
		</aside>
	)
}

export default Basket
