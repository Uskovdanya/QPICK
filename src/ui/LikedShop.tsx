import ShopItem from "../components/Shop/ShopItem";
import { useAppSelector } from "../hooks/hooks";
import EmptyLikeComponent from "../components/Liked/EmptyLikeComponent";
import { getLikedCart } from "../state/likeSlice";

interface ShopItemProps {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  liked: boolean;
  info: string;
  wireless: boolean;
}

function LikedShop() {
  const likedCart = useAppSelector(getLikedCart);

  if (!likedCart.length) return <EmptyLikeComponent />;

  return (
    <>
      <ul className="shop__container mb-5 mt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-[30px] lg:mb-[29px] lg:mt-[28px]">
        {likedCart.map((card: ShopItemProps) => (
          <ShopItem key={card.id} card={card} />
        ))}
      </ul>
    </>
  );
}

export default LikedShop;
