interface ShoppingTitleProps {
  text: string;
  color: string;
}

function ShoppingTitle({ text, color }: ShoppingTitleProps) {
  return <h2 className={`text-4 font-semibold ${color}`}>{text}</h2>;
}

export default ShoppingTitle;
