import { useAppDispatch } from "../../hooks/hooks";
import { clearCart } from "../../state/cartSlice";

function ClearCartButton() {
  const dispatch = useAppDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div
      className="bg-heartColor mt-8 w-[250px] cursor-pointer rounded-[20px] py-[22px] text-center text-[17px] font-semibold text-white shadow-checkOutShadow hover:-translate-y-[2px] active:translate-y-0"
      onClick={handleClearCart}
    >
      Очистить корзину
    </div>
  );
}

export default ClearCartButton;
