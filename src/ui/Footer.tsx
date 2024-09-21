import { Link } from "react-router-dom";
import Logo from "../components/Navigation/Logo";
import Social from "../components/Footer/Social";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  const activeLang = i18n.language;
  return (
    <footer className="footer__container mt-2 h-full flex-wrap items-center justify-center gap-4 rounded-t-[30px] bg-white pb-4 pl-3 pr-3 pt-3 shadow-shopCardShadow xxs:items-start sm:flex sm:justify-between sm:pl-[29px] sm:pr-[27px] md:mt-5 md:pt-[29px] xl:h-[149px]">
      <Logo />
      <ul className="footer__list mt-[5px] flex flex-col items-center text-[17px] font-normal text-textFooterColor sm:mt-0 md:items-start">
        <li className="footer__item cursor-pointer hover:text-accentColor2 active:text-accentColor sm:mb-[11px]">
          {t("favorites")}
        </li>
        <Link
          to="/cart"
          className="footer__item block cursor-pointer hover:text-accentColor2 active:text-accentColor sm:mb-[10px]"
        >
          {t("cart")}
        </Link>
        <li className="footer__item cursor-pointer hover:text-accentColor2 active:text-accentColor">
          {t("contacts")}
        </li>
      </ul>
      <ul className="footer__list-lang flex flex-col items-center sm:mt-[5px] sm:gap-2 md:items-start md:gap-[35px]">
        <p className="footer__terms cursor-pointer text-[17px] font-normal text-textFooterColor hover:text-accentColor2 active:text-accentColor">
          {t("termsOfService")}
        </p>
        <div className="footer__lang flex justify-center gap-[17px] text-[15px] font-medium text-logoColor md:justify-start">
          <img src="/icons/planet.svg" alt="language" />
          <p
            className={`footer__lang-text mb-[5px] cursor-pointer hover:-translate-y-[2px] hover:text-accentColor2 active:translate-y-0 active:text-accentColor sm:mb-0 ${activeLang === "ru" ? "font-bold text-accentColor" : ""}`}
            onClick={() => i18n.changeLanguage("ru")}
          >
            Рус
          </p>
          <p
            className={`footer__lang-text ${activeLang === "en" ? "font-bold text-accentColor" : ""} cursor-pointer hover:-translate-y-[2px] hover:text-accentColor2 active:translate-y-0 active:text-accentColor`}
            onClick={() => i18n.changeLanguage("en")}
          >
            Eng
          </p>
        </div>
      </ul>
      <Social />
    </footer>
  );
}

export default Footer;
