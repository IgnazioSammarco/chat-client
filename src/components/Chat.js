import { Component } from 'react/cjs/react.development';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:8080/chat');

const dummy_messages = [
  // {id:"1", text:"Prova messaggio"},
  // {id:"2", text:"Messaggio 2"}
];

class Chat extends Component{

  constructor(props) {
    super(props);
    this.state = {message: ''};
    this.state = {messages: dummy_messages};
  }

  handleChange(e) {
    this.setState({
        message : e.target.value
    });
  }

  // sendMessage = function(){
  //   client.send("Messaggio statico");
  // }  

  // // Manda il messaggio preso dal DOM - NON USARE
  // sendMessage = () => {
  //   const message = document.getElementById('message').value
  //   client.send(message);
  // }

  // Manda il messaggio salvato e aggiornato sullo state 
  sendMessage = () => {
    client.send(this.state.message);
    this.setState({
      message: ''
    })
  }

  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      this.setState({
        messages: [...this.state.messages, {id:3,text: message.data}]
      })
    };
    client.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  render() {
    return (
      <div>
        <h2>Chat realizzata con React e WebSockets</h2>
        {/* <input id="message"></input> */}
        <input onChange={ this.handleChange.bind(this) }></input>
        <button onClick={() => this.sendMessage() }>Send Message</button>
        <div className="messages">
          {this.state.messages.map(message => {
              return (
               <li key={message.id}>
                   {message.text}
               </li>
             )
           })}
        </div>
      </div>
    );
  }

}

export default Chat;


// Fonti
// https://www.freecodecamp.org/news/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b/
