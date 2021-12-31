import { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useRef, useEffect  } from 'react';
import './Chat.css';

// const client = new W3CWebSocket('ws://localhost:8080/chat');
const client = new W3CWebSocket('wss://chat-server-spring.herokuapp.com/chat');

const dummy_messages = [
  // {id:"1", text:"Prova messaggio"},
  // {id:"2", text:"Messaggio 2"}
];

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

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
    });
  }

  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      let id = this.state.messages.length;
      this.setState({
        messages: [...this.state.messages, {id:id,text: message.data}]
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
        <div className="chatbox">
          <div id="messages" className="messages">
            {this.state.messages.map(message => {
                return (
                <div className="message-text" key={message.id}>
                    {message.text}
                </div>
              )
            })}
            <AlwaysScrollToBottom />
          </div>
          <div className="message-input">  
            <input 
              value={this.state.message || ''}
              onChange={ this.handleChange.bind(this) }>
            </input>
            <button onClick={() => this.sendMessage() }>Send Message</button>
          </div>  
        </div>
      </div>
    );
  }

}

export default Chat;


// Fonti
// https://www.freecodecamp.org/news/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b/
