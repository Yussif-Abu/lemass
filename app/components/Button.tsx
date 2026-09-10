import type {ButtonHTMLAttributes,ReactNode} from "react";

type ButtonVariant =| "primary"| "secondary"| "success"| "danger"| "warning"| "info"| "outline"| "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
  };

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;