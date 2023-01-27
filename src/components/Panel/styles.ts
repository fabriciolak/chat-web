import styled, { css } from 'styled-components'

export const Container = styled.aside`
  ${({ theme }) => css`
    width: 21.8125rem;
    max-width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    border-right: 1px solid rgba(0, 0, 0, .1);
  `}
`

export const PanelHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 21.8125rem;
    height: 5.5625rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    span {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.5;
    }
  `}
`

export const Conversations = styled.div`
  width: 21.8125rem;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    width: 21.8125rem;
    max-width: 100%;
    padding: 0.75rem 1.5rem;

    input {
      width: 18.75rem;
      height: 3rem;
      padding: 0.625rem 1.25rem;

      border: none;
      border-radius: 12px;
      outline: none;
      background-color: ${theme['bg-color']};

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: rgba(0, 0, 0, .4);
    }`
  }
`

export const PlusButton = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.0625rem;
    height: 2.0625rem;

    border-radius: 50%;
    
    background-color: ${theme['message-bg-purple']};
    color: ${theme['white']};
    cursor: pointer;
  `}
`