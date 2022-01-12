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
import data from "./service/data";

function App() {
  
  const {products} = data; 
  const [cartItems,setCartItems] = useState([]);

  return (
    <div className="App">
      <div className="">
        <Chat/>
        {/* <Card/> */}
        {/* <ClockClass/>  */}
        {/* <ClockFunc/>  */}
        {/* <Form/> */}
        {/* <TodoList/> */}

        {/* <Header/>
        <div className='row'>
          <Main products={products}/>
          <Basket cartItems={cartItems}/>
        </div> */}

      </div>
    </div>
  );
}

export default App;
