import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'rounded'
  size?: 'small' | 'medium' | 'large'
  bgColor?: string
  customWidth?: string
}

export function Button({
  children,
  size = 'large',
  variant = 'primary',
  bgColor,
  customWidth,
  ...props
}: ButtonProps) {
  return (
    <Container size={size} variant={variant} bgColor={bgColor} customWidth={customWidth} {...props}>
      {children}
    </Container>
  )
}