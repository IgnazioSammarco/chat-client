import React from 'react'
import "./Basket.css";

function Basket(props) {
	const {cartItems, onAdd} = props;
	return (
		<aside className='block col-1'>
			<h2>Carrello</h2>
			<div>
				{
					cartItems.length === 0 
					&& <div>Il carrello è vuoto</div>
				}
			</div>
			{/* <div>
				{JSON.stringify(cartItems)};
			</div>	 */}

			{cartItems.map(
					(item) => 
						<div key={item.id}>{item.name}</div> 
					)
			}
		</aside>
	)
}

// JSON.stringify(cartItems.test)

export default Basket
