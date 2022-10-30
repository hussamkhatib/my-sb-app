import { FC } from "react";
import classNames from "classnames";

type Props = {
  children: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary";
};

const Button: FC<Props> = ({
  children = "Button",
  size = "md",
  variant = "primary",
}) => {
  return (
    <button
      className={classNames(
        "inline-flex items-center relative",
        size === "sm" && "px-3 py-2 text-sm leading-4 font-medium rounded-sm",
        size === "md" && "px-3 py-2 text-sm font-medium rounded-sm",
        size === "lg" && "px-4 py-2 text-base font-medium rounded-sm",
        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        variant === "secondary" &&
          "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
