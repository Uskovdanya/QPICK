import { useAppDispatch } from "../../hooks/hooks";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../state/cartSlice";

function Quantity({
  itemId,
  currentQuantity,
}: {
  itemId: number;
  currentQuantity: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className=" flex items-center justify-center gap-[25px]">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[30px] w-[30px] cursor-pointer fill-accentColor2 hover:-translate-y-[2px] active:translate-y-0 active:fill-accentColor"
        onClick={() => dispatch(decreaseItemQuantity(itemId))}
      >
        <circle cx="15" cy="15" r="15" className="" />
        <path d="M8 14H22V16H8V14Z" fill="white" />
      </svg>
      <p className="text-[17px] font-semibold text-textFooterColor">
        {currentQuantity}
      </p>
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[30px] w-[30px] cursor-pointer fill-accentColor2 hover:-translate-y-[2px] active:translate-y-0 active:fill-accentColor"
        onClick={() => dispatch(increaseItemQuantity(itemId))}
      >
        <circle cx="15.2056" cy="15" r="15" />
        <path
          d="M14.2056 14V8H16.2056V14H22.2056V16H16.2056V22H14.2056V16H8.20557V14H14.2056Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default Quantity;
