import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { deleteItem, getCurrentQuantityById } from "../../state/cartSlice";
import Quantity from "./Quantity";

interface CartItemProps {
  cartItem: {
    itemId: number;
    img: string;
    title: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  };
}

function CartItem({ cartItem }: CartItemProps) {
  const dispatch = useAppDispatch();

  const { itemId, img, title, quantity, unitPrice, totalPrice } = cartItem;

  const currentQuantity = useAppSelector(getCurrentQuantityById(itemId));

  return (
    <div className="cart mt-2 h-[218px] max-w-[633px] rounded-[30px] bg-white pb-[15px] pl-[19px] pr-[28px] pt-[18px] shadow-shopCardShadow">
      <div className="flex h-full items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-[24px]">
            <img
              src={img}
              alt={title}
              className="cart__img h-[136px] w-[146px]"
            />
            <div className="">
              <p className="cart__title text-[17px] font-medium text-titleColor">
                {title}
              </p>
              <p className="cart__price text-[15px] font-semibold text-textGray">
                {unitPrice} &#8381;
              </p>
            </div>
          </div>
          <div className="ml-[14px] mt-[19px]">
            <Quantity itemId={itemId} currentQuantity={currentQuantity} />
          </div>
        </div>
        <div className="flex h-full flex-col items-end justify-between">
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer fill-trashColor hover:-translate-y-[2px] hover:fill-accentColor2 active:translate-y-0 active:fill-accentColor"
            onClick={() => dispatch(deleteItem(itemId))}
          >
            <path d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z" />
          </svg>
          <p className="text-[15px] font-medium text-titleColor">
            {totalPrice} &#8381;
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
