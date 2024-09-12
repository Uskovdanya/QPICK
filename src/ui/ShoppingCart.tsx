import CartItem from "../components/Cart/CartItem";
import Checkout from "../components/Cart/Checkout";
import EmptyCart from "../components/Cart/EmpyCart";
import ShoppingTitle from "../components/Shop/ShoppingTitle";
import { useAppSelector } from "../hooks/hooks";
import { getCart } from "../state/cartSlice";

function ShoppingCart() {
  const cart = useAppSelector(getCart);

  if (!cart.length) return <EmptyCart />;
  console.log(cart);
  return (
    <div className="mt-[29px]">
      <ShoppingTitle text="Корзина" color="text-titleColor" />
      <div className="mt-[13px] flex justify-between gap-3">
        <ul className="">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.itemId} cartItem={cartItem} />
          ))}
        </ul>
        <Checkout />
      </div>
    </div>
  );
}

export default ShoppingCart;
