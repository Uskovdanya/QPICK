import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "text-sm group-hover:fill-accentColor2 active:text-accentColor text-textFooterColor hover:text-accentColor hover:-translate-y-[2px] active:translate-y-0";
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr; Назад
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
