import { Frame, HighlightTitle, ContentWrapper } from './styles'
import Home from '../Home'

function App () {
  const background = process.env.PUBLIC_URL + '/images/backgrounds/background' + Math.floor(Math.random() * 4) + '.png'
  return (
    <Frame background={background}>
      <ContentWrapper>
        <HighlightTitle>
          Hello
        </HighlightTitle>
        {/* <NFTMarket /> */}
        {/* <ExchangeList /> */}
        <Home />
      </ContentWrapper>
    </Frame>
  )
}

export default App
