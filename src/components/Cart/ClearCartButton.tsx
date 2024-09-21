import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../hooks/hooks";
import { clearCart } from "../../state/cartSlice";

function ClearCartButton() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div
      className="mt-8 w-full cursor-pointer rounded-[20px] bg-heartColor py-[22px] text-center text-[17px] font-semibold text-white shadow-checkOutShadow hover:-translate-y-[2px] active:translate-y-0 md:w-[250px]"
      onClick={handleClearCart}
    >
      {t("emptyCart")}
    </div>
  );
}

export default ClearCartButton;
