import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="header__logo block text-center text-[22px] font-bold text-logoColor hover:-translate-y-[2px] hover:text-accentColor2 active:translate-y-0 active:text-accentColor sm:text-[25px]"
    >
      QPICK
    </Link>
  );
}

export default Logo;
