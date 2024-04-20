import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Button({
  children,
  disabled,
  to,
  className,
  size,
  type,
  onClick,
}) {
  const styles = clsx(
    "rounded-full  font-semibold uppercase  transition-colors duration-300 focus:outline-none focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed text-sm",
    className,
    {
      primary:
        "bg-yellow-400 focus:ring-yellow-500 text-stone-800 hover:bg-yellow-500 focus:bg-yellow-500",
      secondary:
        "border-2 border-stone-300 text-stone-400 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:ring-stone-200 focus:text-stone-800",
    }[type],
    {
      small: "px-4 py-2 md:px-5 md:py-2.5 text-xs",
      normal: "px-4 py-3 sm:px-6 sm:py-4",
      normalSecondary: "py-3.5 px-4 sm:py-3.5 sm:px-6",
      round: "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    }[size],
  );

  if (to)
    return (
      <Link to={to} className={styles} onClick={onClick}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
