import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/solid";
import classNames from "classnames";
import { FC } from "react";

interface Props {
  children?: string;
  severity?: "error" | "warning" | "info" | "success";
}

const Alert: FC<Props> = ({ children, severity = "info" }) => {
  return (
    <div
      className={classNames(
        "p-4 flex flex-col items-center",
        severity === "error" && "bg-red-100 text-red-800",
        severity === "warning" && "bg-yellow-100 text-yellow-800",
        severity === "info" && "bg-blue-100 text-blue-800",
        severity === "success" && "bg-green-100 text-green-800"
      )}
    >
      {severity === "error" && (
        <ExclamationCircleIcon className="h-6 w-6 text-red-500" aria-hidden />
      )}
      {severity === "warning" && (
        <ShieldExclamationIcon
          className="h-6 w-6 text-yellow-500"
          aria-hidden
        />
      )}
      {severity === "info" && (
        <InformationCircleIcon className="h-6 w-6 text-blue-500" aria-hidden />
      )}
      {severity === "success" && (
        <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden />
      )}
      <div className="pt-2">
        This is an example of an Alert componenet with severity as :{severity}
      </div>
    </div>
  );
};
export default Alert;
