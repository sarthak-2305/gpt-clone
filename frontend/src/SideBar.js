import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import account from './assets/rocket.svg'
import llamaLogo from './assets/llamaLogo.webp'


export default function sideBar() {
  return (
    <div className="sideBar">
      <div className="upperSide">
        <div className="upperSideTop">
          <img src={llamaLogo} alt="logo" className="logo" />
          <span className="brand">LLaMA Playground</span>
        </div>
        <button
          className="newChat"
          onClick={() => {
            window.location.reload();
          }}
        >
          {" "}
          <img src={addBtn} alt="new chat" className="addBtn" />
          new chat
        </button>
        <div className="upperSideBottom">
          <button className="query">
            {" "}
            <img src={msgIcon} alt="query" />
            How did we get here?
          </button>
          <button className="query">
            {" "}
            <img src={msgIcon} alt="query" />
            Why did we get here?
          </button>
        </div>
      </div>
      <div className="lowerSide">
        <div className="listItems">
          <img src={home} alt="home" className="listItemsImg" />
          Home
        </div>
        <div className="listItems">
          <img src={saved} alt="saved" className="listItemsImg" />
          Saved
        </div>
        <div className="listItems">
          <img src={account} alt="account" className="listItemsImg" />
          Account
        </div>
      </div>
    </div>
  );
}
