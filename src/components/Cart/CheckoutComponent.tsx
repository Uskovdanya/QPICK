import { useAppSelector } from "../../hooks/hooks";
import { getTotalCartPrice } from "../../state/cartSlice";
import { formatCurrencyWithoutRUB } from "../../utils/helpers";
import CheckoutButton from "./CheckoutButton";

function CheckoutComponent() {
  const totalCartPrice = useAppSelector(getTotalCartPrice);

  return (
    <div className="relative h-[114px] w-full rounded-[30px] bg-white pl-[22px] pr-[16px] pt-[21px] shadow-shopCardShadow">
      <div className="flex items-center justify-between text-[15px] font-semibold text-textFooterColor">
        <p>Итого</p>
        <p>&#8381; {formatCurrencyWithoutRUB(totalCartPrice)}</p>
      </div>
      <CheckoutButton />
    </div>
  );
}

export default CheckoutComponent;
