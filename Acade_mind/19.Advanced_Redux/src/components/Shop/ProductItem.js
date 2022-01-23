import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const isToggleOpened = useSelector((state) => state.cart.isOpened);
  const { title, price, description } = props;

  const addHandler = () => {
    if (isToggleOpened === false) {
      dispatch(cartActions.toggleCart());
    }
    dispatch(cartActions.increment());
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
