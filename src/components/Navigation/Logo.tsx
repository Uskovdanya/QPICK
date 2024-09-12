import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="header__logo text-[25px] font-bold text-logoColor hover:-translate-y-[2px] hover:text-accentColor2 active:translate-y-0 active:text-accentColor"
    >
      QPICK
    </Link>
  );
}

export default Logo;
