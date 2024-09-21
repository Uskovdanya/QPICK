import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CheckoutButton() {
  const { t } = useTranslation();
  return (
    <Link
      className="absolute left-[1px] right-0 top-[55px] w-full cursor-pointer rounded-[20px] bg-logoColor py-[22px] text-center text-[17px] font-semibold text-white shadow-checkOutShadow hover:-translate-y-[2px] active:translate-y-0"
      to="/checkout"
    >
      {t("checkout")}
    </Link>
  );
}

export default CheckoutButton;
