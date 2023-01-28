import styled, { css, DefaultTheme } from "styled-components";

interface ContainerProps {
  variant: 'primary' | 'rounded'
  size: 'small' | 'medium' | 'large'
  bgColor?: string
  customWidth?: string
}

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 22px;

    padding: 2px 8px !important;

    font-family: 0.75rem;
    font-weight: 600;

    color: #000 !important;
    background-color: #EDF2F7 !important;
  `,

  medium: (theme: DefaultTheme) => css`
    height: 33px;
  `,

  large: (theme: DefaultTheme) => css`
    height: 44px;
  `,

  primary: (theme: DefaultTheme) => css`
    padding: 1rem 0.625rem;
  `,

  rounded: (theme: DefaultTheme) => css`
    width: 33px;
    border-radius: 999px;
  `
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, variant, bgColor, customWidth }) => css`
    width: ${customWidth ? customWidth : 'auto'};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background-color: ${bgColor ? bgColor : '#615EF0'};
    color: #FFF;

    border: 0;
    border-radius: 8px;
    outline: 0;

    cursor: pointer;

    ${containerModifiers[size](theme!)}
    ${containerModifiers[variant](theme)}
  `}
`