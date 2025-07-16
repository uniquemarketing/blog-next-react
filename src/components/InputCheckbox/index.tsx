import clsx from "clsx";
import { useId } from "react";

type InputCheckboxProps = {
  labelText?: string;
  type?: "checkbox";
} & React.ComponentProps<"input">;

export function InputCheckbox({
  labelText = "",
  type = "checkbox",
  ...props
}: InputCheckboxProps) {
  const id = useId();
  return (
    <div className="flex items-center gap-3">
      <input
        {...props}
        className={clsx(
          "w-4 h-4 outline-0 focus:ring-1 focus:ring-blue-500",
          props.className
        )}
        id={id}
        type={type}
      />

      {labelText && (
        <label className="text-base" htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
}
