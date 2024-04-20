import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";

export function LinkButton({ children, to, className }) {
  const styles = clsx(
    "text-sm text-blue-500 hover:text-blue-600  hover:underline",
    className,
  );

  const navigate = useNavigate();

  if (to === -1)
    return (
      <button className={styles} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    );

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
}
