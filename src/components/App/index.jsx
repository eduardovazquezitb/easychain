import NFTMarket from '../NFTMarket'
import { Frame, HighlightTitle } from './styles'

function App () {
  return (
    <Frame>
      <div style={{ height: '5vh' }}>
        <HighlightTitle>
          Hello
        </HighlightTitle>
      </div>
      <div style={{ height: '95vh', position: 'relative' }}>
        <NFTMarket />
      </div>
    </Frame>
  )
}

export default App
