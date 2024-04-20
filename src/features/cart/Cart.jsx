import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { LinkButton } from "../../ui/LinkButton";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary" size="normal">
          Order pizzas
        </Button>
        <Button
          type="secondary"
          size="normalSecondary"
          onClick={handleClearCart}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
