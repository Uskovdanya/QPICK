import { Link } from "react-router-dom";

function CheckoutButton() {
  return (
    <Link
      className="absolute left-[1px] right-0 top-[55px] w-[349px] cursor-pointer rounded-[20px] bg-logoColor py-[22px] text-center text-[17px] font-semibold text-white shadow-checkOutShadow hover:-translate-y-[2px] active:translate-y-0"
      to="/checkout"
    >
      Перейти к оформлению
    </Link>
  );
}

export default CheckoutButton;
