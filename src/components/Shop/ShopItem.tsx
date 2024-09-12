import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addItem, getCurrentQuantityById } from "../../state/cartSlice";
import Quantity from "../Cart/Quantity";

interface Card {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  liked: boolean;
}
interface ShopItemProps {
  card: Card;
}

function ShopItem({ card }: ShopItemProps) {
  const dispatch = useAppDispatch();

  const { id, img, title, price, oldPrice, rate, liked } = card;

  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      itemId: id,
      img: img,
      title: title,
      quantity: 1,
      unitPrice: price,
      totalPrice: price,
    };
    dispatch(addItem(newItem));
  }

  function handleLike() {}

  return (
    <li className="card__container relative flex h-[407px] w-[350px] flex-col items-center justify-between rounded-[30px] bg-white px-[21px] pb-[26px] shadow-shopCardShadow">
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="active:fill-heartColor absolute right-5 top-5 h-[20px] w-[22px] cursor-pointer fill-accentColor2 hover:-translate-y-[2px] hover:fill-accentColor active:translate-y-0"
        onClick={handleLike}
      >
        <path d="M11.0009 1.65429C13.5848 -0.627558 17.5777 -0.551821 20.0669 1.90098C22.5551 4.35487 22.6409 8.2629 20.3265 10.812L10.9987 20L1.67308 10.812C-0.641282 8.2629 -0.554383 4.34837 1.93267 1.90098C4.42412 -0.548575 8.40935 -0.630804 11.0009 1.65429Z" />
      </svg>

      <img src={img} alt="photo" className="card__image mt-[15px] w-[220px]" />
      <div className="flex w-full flex-col">
        <div className="card__wrapper flex w-full items-center justify-between">
          <h3 className="card__title text-[17px] font-semibold text-titleColor">
            {title}
          </h3>
          <p className="card__price relative text-[17px] font-semibold text-accentColor">
            {price} &#8381;
            {oldPrice && (
              <span className="absolute -bottom-[17px] right-0 text-right text-[13px] text-accentColor2 line-through">
                {oldPrice} &#8381;
              </span>
            )}
          </p>
        </div>
        <div className="card__box mt-[25px] flex items-center justify-between">
          <div className="card__rate-box flex gap-[10px]">
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="card__star group cursor-pointer hover:-translate-y-[2px] active:translate-y-0"
            >
              <path
                className="fill-accentColor2 group-active:fill-accentColor"
                d="M12.6268 18.0146L5.41618 22.3659L7.37647 14.2452L0.960754 8.81518L9.38215 8.14856L12.6268 0.439941L15.8715 8.14856L24.2941 8.81518L17.8771 14.2452L19.8374 22.3659L12.6268 18.0146Z"
                fill="#FFCE7F"
              />
            </svg>

            <p className="card__rate text-[17px] font-semibold text-textTitle">
              {rate}
            </p>
          </div>
          {!isInCart && (
            <button
              className="color h-[30px] cursor-pointer text-[17px] font-semibold hover:text-accentColor2 active:text-accentColor"
              onClick={handleAddToCart}
            >
              Купить
            </button>
          )}
          {isInCart && (
            <Quantity itemId={id} currentQuantity={currentQuantity} />
          )}
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
