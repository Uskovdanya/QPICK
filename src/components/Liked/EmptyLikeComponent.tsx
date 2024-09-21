import { Trans } from "react-i18next";
import LinkButton from "../../ui/LinkButton";

function EmptyLikeComponent() {
  return (
    <div className="m-auto mt-[29px] flex flex-col items-center justify-center">
      <LinkButton to="/">&larr; Вернуться к каталогу</LinkButton>
      <p className="mt-7 text-center font-semibold">
        <Trans i18nKey="emptyLikeComponent">
          Ваш список избранного пуст. <br></br> Вы можете перейти в каталог
          <br></br> и выбрать интересующие вас товары.
        </Trans>
      </p>

      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-7 h-20 w-20 fill-heartColor"
      >
        <path d="M11.0009 1.65429C13.5848 -0.627558 17.5777 -0.551821 20.0669 1.90098C22.5551 4.35487 22.6409 8.2629 20.3265 10.812L10.9987 20L1.67308 10.812C-0.641282 8.2629 -0.554383 4.34837 1.93267 1.90098C4.42412 -0.548575 8.40935 -0.630804 11.0009 1.65429Z" />
      </svg>
    </div>
  );
}

export default EmptyLikeComponent;
