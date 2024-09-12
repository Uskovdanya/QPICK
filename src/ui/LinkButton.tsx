import { Link, useNavigate } from "react-router-dom";

interface LinkButtonProps {
  children: React.ReactNode;
  to: string;
}
function LinkButton({ children, to }: LinkButtonProps) {
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
