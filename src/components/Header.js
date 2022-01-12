import React from "react";
import "./Header.css";

function Header(props){
	return (
		<header className="row block center">
			<h2>Shopping cart</h2>	
			<div>
				<a href="#/cart">Cart</a>
				<a href="#/signin">SignIn</a>
			</div>
		</header>
	);

}

export default Header;