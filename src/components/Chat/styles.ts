import styled from "styled-components";

export const Container = styled.div`
  width: 21.8125rem;
  max-width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 0.75rem;
`

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;

  border-radius: 12px;

  background-color: #D8D8D8;
  color: #D8D8D8;

  img {
    width: auto;
    height: 100%;
    border-radius: 12px;
    object-fit: contain;
  }
`

export const Header = styled.header`
  width: 16.3125rem;
  min-height: 2.4375rem;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    strong {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.5;
    }

    span {
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.4);
    }
  }
`

export const LastMessageSent = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.4);
`
