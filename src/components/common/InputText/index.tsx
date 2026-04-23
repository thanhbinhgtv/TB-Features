import React from "react";

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <input
      ref={ref}
      type="text"
      className={`w-full rounded-lg border border-(--border-strong) bg-(--surface-page) px-3 py-2 text-sm text-(--text-primary) outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) ${className ?? ""}`}
      {...restProps}
    />
  );
});

InputText.displayName = "InputText";  // Đặt displayName để dễ dàng debug trong React DevTools

export default InputText;
