import { useTranslation } from "react-i18next";
import CartItem from "../components/Cart/CartItem";
import CheckoutComponent from "../components/Cart/CheckoutComponent";
import ClearCartButton from "../components/Cart/ClearCartButton";
import EmptyCart from "../components/Cart/EmpyCart";
import ShoppingTitle from "../components/Shop/ShoppingTitle";
import { useAppSelector } from "../hooks/hooks";
import { getCart } from "../state/cartSlice";

function ShoppingCart() {
  const cart = useAppSelector(getCart);
  const { t } = useTranslation();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-3 flex h-full flex-col items-stretch justify-stretch sm:mt-5 md:mt-[29px]">
      <ShoppingTitle text={t("cart")} color="text-titleColor" />
      <div className="mt-[13px] flex flex-col flex-wrap items-center justify-between gap-3 md:flex-row md:items-start">
        <ul className="flex flex-col flex-wrap items-center md:[width:clamp(25rem,5.784rem+40.03vw,39.563rem)]">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.itemId} cartItem={cartItem} />
          ))}
        </ul>
        <div className="flex w-full flex-col items-center xxs:w-[412.69px] md:items-end md:[width:clamp(15.625rem,-22.48rem+64.52vw,21.875rem)]">
          <CheckoutComponent />
          <ClearCartButton />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
