import { Plus } from 'phosphor-react'
import { Chat } from '../Chat';
import { Container, Conversations, PanelHeader, PlusButton, SearchContainer } from "./styles";

export function Panel() {
  return (
    <Container>
      <PanelHeader>
        <span>Messages</span>
        <PlusButton href='/'>
          <Plus size={23} weight="bold" />
        </PlusButton>
      </PanelHeader>
      
      <SearchContainer>
        <input type="text" placeholder='Search messages' />
      </SearchContainer>

      <Conversations>  
        <Chat />
        <Chat />
        <Chat />
      </Conversations>
    </Container>
  )
}