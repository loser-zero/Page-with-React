import "./Main.css";

export default function Main() {
  return (
    <main>
      <div className="main">
        <div className="card">
          <img className="main-img" src="Frame (2).svg" />
          <p className="main-p">Shop what you love</p>
          <p>
            Find new products and brands. Get the best deal and earn
            rewards—just for shopping.
          </p>
        </div>
        <div className="card">
          <img main-img src="Frame (3).svg" />

          <p  className="main-p">Pay how you like</p>
          <p>
            Choose how you pay at partner stores, via our app, Klarna Card or
            browser extension.
          </p>
        </div>
        <div main-img className="card">
          <img src="Frame (4).svg" />

          <p  className="main-p">Pay how you like</p>
          <p>
            Split your payments and manage purchases, with a smart spending
            overview and more.
          </p>
        </div>
      </div>
    </main>
  );
}
