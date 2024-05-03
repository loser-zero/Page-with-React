import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-links">
        <a id="first-a" href="#" className="header-a">
          Shopping categories
        </a>
        <a href="#" className="header-a">
          Deals and rewards
        </a>
        <a href="#" className="header-a">
          How Klarna works
        </a>
        <a href="#" className="header-a">
          Help
        </a>
        <a id="login" href="#" className="header-a">
          Log in
        </a>
        <a id="Signin" href="#" className="header-a">
          Sign up
        </a>
      </div>
      <div className="header-box">
        <div className="header-text">
          <h1>Find it. Compare it. And pay how you like</h1>
          <div className="header-input">
            <input type="text" />
            <img id="search" src="Frame.svg" />
            <button id="btn-circle">
              <img src="Go.svg" />
            </button>
          </div>
        </div>
        <div className="header-image">
          <img src="IMAGE.svg" />
        </div>
      </div>
    </header>
  );
}
