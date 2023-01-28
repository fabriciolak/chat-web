import { DotsThreeVertical, PhoneCall, Plus } from "phosphor-react"
import { Button } from "./components/Button"

import { Chat } from "./components/Chat"
import { Panel } from "./components/Panel"
import { Conversations, SearchContainer } from "./components/Panel/styles"

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Panel title="Messages" badge={true} badgeValue={12} badgeBackground="#EDF2F7">
        <SearchContainer>
          <input type="text" placeholder='Search messages' />
        </SearchContainer>

        <Conversations>  
          <Chat />
          <Chat />
          <Chat />
        </Conversations>
      </Panel>

      <Panel title="Members">
        <Conversations>  
          <Chat />
          <Chat />
          <Chat />
        </Conversations>        
      </Panel>

      <GlobalStyle theme={defaultTheme} />
    </div>
  )
}

export default App
