import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ammount = useSelector((state) => state.cart.ammount);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item", quantity: ammount, total: 12, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
