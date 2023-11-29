import './App.css';
import SideBar from './SideBar'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import aiIcon from './assets/terminator.jpeg'
import { sendMsg } from './llama';
import { useEffect, useRef, useState } from 'react';


let context = null;
function App() {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am a chatbot based on LLaMA-2. Ask anything you want.",
      isBot: true
    }
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([...messages, { text, isBot: false }]);
    // console.log("Before context is app: " + context);

    try {
      const [res, newContext] = await sendMsg(text, context);
      context = newContext;
      setMessages([
        ...messages,
        { text, isBot: false },
        { text: res, isBot: true }
      ]);
    } catch (error) {
      const errMsg = "The server is down, try starting it.";
      setMessages([
        ...messages, 
        {text, isBot: false}, 
        {text: errMsg, isBot: true}
      ]);
    }
    // console.log(messages);
    // console.log("After context in app: " + context);
  }

  const handleEnter = async (e) => {
    if (e.key === 'Enter') await handleSend();
  }

  return (
    <div className="App">
      <SideBar />
      <div className='main'>
        <div className='chats'>

          {messages.map((message, i) =>
            <div key={i} className={message.isBot ? 'chat bot' : 'chat'}>
              <img className='chatImg' src={message.isBot ? aiIcon : userIcon} alt='' /><p className='txt'>{message.text}</p>
            </div>
          )}

          <div ref={msgEnd} />
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input
              type='text'
              placeholder='Type your prompt...'
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => { setInput(e.target.value) }}
            />
            <button className='send' onClick={handleSend}>
              <img src={sendBtn} alt='send arrow' />
            </button>
          </div>
          <p>Made by Sarthak Tanwar for fun</p>
        </div>
      </div>
    </div>
  );
}

export default App;
