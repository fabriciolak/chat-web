import { Panel } from "./components/Panel"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <>
      <Panel />
      <GlobalStyle theme={defaultTheme} />
    </>
  )
}

export default App
