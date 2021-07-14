// import logo from './logo.svg';
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">WebShop</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="singin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Gaming Console</a>
          </li>
          <li>
            <a href="index.html">Games</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/pd1.jpg"
                  alt="playstation 5"
                />
                <div className="product-name">
                  <a href="product.html">Playstation 5</a>
                </div>
                <div className="product-brand">Sony</div>
                <div className="product-price">$900</div>
                <div className="product-rating">4.5 start (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/pd1.jpg"
                  alt="playstation 5"
                />
                <div className="product-name">
                  <a href="product.html">Playstation 5</a>
                </div>
                <div className="product-brand">Sony</div>
                <div className="product-price">$900</div>
                <div className="product-rating">4.5 start (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/pd1.jpg"
                  alt="playstation 5"
                />
                <div className="product-name">
                  <a href="product.html">Playstation 5</a>
                </div>
                <div className="product-brand">Sony</div>
                <div className="product-price">$900</div>
                <div className="product-rating">4.5 start (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/pd1.jpg"
                  alt="playstation 5"
                />
                <div className="product-name">
                  <a href="product.html">Playstation 5</a>
                </div>
                <div className="product-brand">Sony</div>
                <div className="product-price">$900</div>
                <div className="product-rating">4.5 start (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/pd1.jpg"
                  alt="playstation 5"
                />
                <div className="product-name">
                  <a href="product.html">Playstation 5</a>
                </div>
                <div className="product-brand">Sony</div>
                <div className="product-price">$900</div>
                <div className="product-rating">4.5 start (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All rights reserverd by JakGi</footer>
    </div>
  );
}

export default App;