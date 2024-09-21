import LikeComponent from "../components/Navigation/LikeComponent";
import CartComponent from "../components/Navigation/CartComponent";
import Logo from "../components/Navigation/Logo";

function Header() {
  return (
    <header className="header__container flex items-center justify-between">
      <Logo />
      <div className="header__navigation flex items-center justify-between md:pr-[25px]">
        <LikeComponent />
        <CartComponent />
      </div>
    </header>
  );
}

export default Header;
