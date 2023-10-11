// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const numberOfItems = cartList.length

      const orderTotal = cartList.reduce(
        (total, eachItem) => total + eachItem.price,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-text">Order Total:Rs{orderTotal}/- </h1>
          <p className="cart-summary-text">{numberOfItems} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
