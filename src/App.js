import './App.css';
import logo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import account from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={logo} alt='logo' className='logo' />
            <span className='brand'>ChatGPT</span>
          </div>
          <button className='newChat'> <img src={addBtn} alt='new chat' className='addBtn' />new chat</button>
          <div className='upperSideBottom'>
            <button className='query'> <img src={msgIcon} alt='query' />How did we get here?</button>
            <button className='query'> <img src={msgIcon} alt='query' />Why did we get here?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='home' className='listItemsImg' />Home</div>
          <div className='listItems'><img src={saved} alt='saved' className='listItemsImg' />Saved</div>
          <div className='listItems'><img src={account} alt='account' className='listItemsImg' />Account</div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt='' /><p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. </p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImgLogo} alt='' /><p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat erat. Fusce tempus sem quis dolor pulvinar pretium. In felis est, lacinia sed commodo id, convallis sed mi. In finibus finibus mauris, nec ornare turpis fringilla id. Morbi lobortis euismod augue. </p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Type your prompt...' /><button className='send'><img src={sendBtn} alt='send arrow' /></button>
          </div>
          <p>Made by Sarthak Tanwar for fun</p>
        </div>
      </div>
    </div>
  );
}

export default App;
