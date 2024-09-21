import ShoppingTitle from "../components/Shop/ShoppingTitle";
import ShopItem from "../components/Shop/ShopItem";

import { useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ShopItem {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  liked: boolean;
  wireless: boolean;
  info: string;
}

function Shop() {
  const { t } = useTranslation();
  const shop: ShopItem[] = useLoaderData() as ShopItem[];

  const wirelessHeadphones = shop.filter((item) => item.wireless === true);
  const headphones = shop.filter((item) => item.wireless === false);

  return (
    <>
      <ShoppingTitle text={t("headphones")} color="text-textTitle" />
      <ul className="shop__container mb-4 mt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-[30px] lg:mb-[29px] lg:mt-[28px]">
        {headphones.map((card) => (
          <ShopItem key={card.id} card={card} />
        ))}
      </ul>
      <ShoppingTitle text={t("wirelessHeadphones")} color="text-textTitle" />
      <ul className="shop__container mb-5 mt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-[30px] lg:mb-[29px] lg:mt-[28px]">
        {wirelessHeadphones.map((card) => (
          <ShopItem key={card.id} card={card} />
        ))}
      </ul>
    </>
  );
}

export default Shop;
