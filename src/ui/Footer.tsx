import { Link } from "react-router-dom";
import Logo from "../components/Navigation/Logo";
import Social from "../components/Footer/Social";

function Footer() {
  return (
    <footer className="footer__container mt5 flex h-[149px] items-start justify-between rounded-t-[30px] bg-white pl-[29px] pr-[27px] pt-[29px] shadow-shopCardShadow">
      <Logo />
      <ul className="footer__list mt-[5px] text-[17px] font-normal text-textFooterColor">
        <li className="footer__item mb-[11px] cursor-pointer hover:text-accentColor2 active:text-accentColor">
          Избранное
        </li>
        <Link
          to="/cart"
          className="footer__item mb-[10px] block cursor-pointer hover:text-accentColor2 active:text-accentColor"
        >
          Корзина
        </Link>
        <li className="footer__item cursor-pointer hover:text-accentColor2 active:text-accentColor">
          Контакты
        </li>
      </ul>
      <ul className="footer__list-lang mt-[5px] flex flex-col gap-[35px]">
        <p className="footer__terms cursor-pointer text-[17px] font-normal text-textFooterColor hover:text-accentColor2 active:text-accentColor">
          Условия сервиса
        </p>
        <div className="footer__lang flex gap-[17px] text-[15px] font-medium text-logoColor">
          <img src="./icons/planet.svg" alt="language" />
          <p className="footer__lang-text cursor-pointer hover:text-accentColor2 active:text-accentColor">
            Рус
          </p>
          <p className="footer__lang-text cursor-pointer hover:text-accentColor2 active:text-accentColor">
            Eng
          </p>
        </div>
      </ul>
      <Social />
    </footer>
  );
}

export default Footer;
