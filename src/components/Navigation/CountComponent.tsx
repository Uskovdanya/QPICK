function CountComponent({ totalCartQuantity }: { totalCartQuantity: number }) {
  if (totalCartQuantity === 0) return null;
  return (
    <div className="count__container absolute right-2 top-[10px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-accentColor">
      <p className="count__number text-[13px] font-medium text-white">
        {totalCartQuantity}
      </p>
    </div>
  );
}

export default CountComponent;
