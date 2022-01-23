import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ammount = useSelector((state) => state.cart.ammount);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {ammount > 0 && (
        <ul>
          <CartItem
            item={{
              title: "Test Item",
              quantity: ammount,
              total: 12,
              price: 6,
            }}
          />
        </ul>
      )}
      {ammount === 0 && <h4>Your Cart is empty..!</h4>}
    </Card>
  );
};

export default Cart;
