import './App.css';
import { useState } from 'react';
import Chat from './components/Chat';
import Card from './components/Card';
import Form from './components/Form';
import ClockFunc from './components/ClockFunc';
import ClockClass from './components/ClockClass';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from "./services/data";

function App() {
  
  const {products} = data; 
  const [cartItems,setCartItems] = useState([]);
  
  const onAdd = (product) =>{
    console.log(product);
		// setCartItems([...cartItems,{...product}]);
	} 
	
  return (
    <div className="App">
      <div className="">
        {/* <Chat/> */}
        {/* <Card/> */}
        {/* <ClockClass/>  */}
        {/* <ClockFunc/>  */}
        {/* <Form/> */}
        {/* <TodoList/> */}

        <Header/>
        <div className='row'>
          <Main onAdd={onAdd} products={products}/>
          <Basket onAdd={onAdd} cartItems={cartItems} />
        </div>

      </div>
    </div>
  );
}

export default App;
