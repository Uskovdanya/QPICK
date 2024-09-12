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

  const likedHeadphones = shop.filter((item) => item.liked === true);

  return (
    <div className="pl-[17px]">
      <ul className="shop__container mb-5 mt-[28px] flex flex-wrap items-center justify-start gap-[30px]">
        {likedHeadphones?.map((card) => <ShopItem key={card.id} card={card} />)}
      </ul>
    </div>
  );
}

export default LikedShop;
