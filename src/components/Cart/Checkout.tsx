import { useAppSelector } from "../../hooks/hooks";
import { getTotalCartPrice } from "../../state/cartSlice";
import CheckoutButton from "./CheckoutButton";

function Checkout() {
  const totalCartPrice = useAppSelector(getTotalCartPrice);

  return (
    <div className="relative h-[114px] w-[350px] rounded-[30px] bg-white pl-[22px] pr-[16px] pt-[21px] shadow-shopCardShadow">
      <div className="flex items-center justify-between text-[15px] font-semibold text-textFooterColor">
        <p>Итого</p>
        <p>&#8381; {totalCartPrice}</p>
      </div>
      <CheckoutButton />
    </div>
  );
}

export default Checkout;
