import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <>
      <div>
        <h1>Hello</h1>

      </div>
      
      <GlobalStyle theme={defaultTheme} />
    </>
  )
}

export default App
