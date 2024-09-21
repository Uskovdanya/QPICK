import LinkButton from "./LinkButton";

function Error() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-[24px] font-bold text-titleColor">
        Страница не найдена/ Page not found
      </p>

      <img
        src="/icons/SomethingWrong.svg"
        alt="Page not found"
        className="h-[300px] w-[300px]"
      />
      <LinkButton to="/">&larr; back</LinkButton>
    </div>
  );
}

export default Error;
