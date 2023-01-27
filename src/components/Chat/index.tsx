import { Container, Avatar, Header, LastMessageSent } from "./styles";

export function Chat() {
  return (
    <Container>
      <Avatar>
        <img src="https://thispersondoesnotexist.com/image" alt="Avatar" />
      </Avatar>
      
      <Header>
        <div>
          <strong>Jhonny</strong>
          <span>12m</span>
        </div>
        
        <LastMessageSent>
          Hello! How ar u?
        </LastMessageSent>

      </Header>
    </Container>
  )
}