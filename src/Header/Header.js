import './Header.css';



function Header() {
  return (
    <div className="Header">
        <div className="header_1">
          <div className="x">
            <div className="x1"></div>
            <div className="x2"></div>
          </div>
          <div className="your">Your Cart</div>
        </div>
        <div className="header_line"></div>
        <div className="header_2">
          <div className="product">
            <div className="product_1">
              <div className="product_11"></div>
              <div className="product_12">
                <div className="product_121">
                  <div>Pothos Collection</div>
                  <div>$150</div>
                </div>
                <div className="product_122">
                  <div className="product_1221">
                    <div>-</div>
                    <div>2</div>
                    <div>+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_2">+</div>
          </div>
        </div>
        <div className="header_line"></div>
        <div className="header_3">
          <div className="header_31">
            <div className="header_311">
              <div>Subtotal:</div><div>$300</div>
            </div>
            <div className="header_button">CHECKOUT</div>
          </div>
        </div>
    </div>
  );
}



export default Header;

