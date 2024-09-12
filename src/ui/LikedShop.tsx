import ShoppingTitle from "../components/Shop/ShoppingTitle";
import ShopItem from "../components/Shop/ShopItem";

import { useLoaderData } from "react-router-dom";

interface ShopItem {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  liked: boolean;
  wireless: boolean;
}

function LikedShop() {
  const shop: ShopItem[] = useLoaderData() as ShopItem[];

  const wirelessHeadphones = shop.filter(
    (item) => item.wireless === true && item.liked === true,
  );

  return (
    <div className="pl-[17px]">
      <ShoppingTitle text="Наушники" color="text-textTitle" />
      <ul className="shop__container mb-[29px] mt-[28px] flex flex-wrap items-center justify-center gap-[30px]"></ul>
      <ShoppingTitle text="Беспроводные наушники" color="text-textTitle" />
      <ul className="shop__container mb-5 mt-[28px] flex flex-wrap items-center justify-center gap-[30px]">
        {wirelessHeadphones.map((card) => (
          <ShopItem key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
}

export default LikedShop;
