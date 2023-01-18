import { Frame, HighlightTitle, ContentWrapper } from './styles'
import ExchangeList from '../ExchangeList'

function App () {
  const background = process.env.PUBLIC_URL + '/images/backgrounds/background' + Math.floor(Math.random() * 4) + '.png'
  return (
    <Frame background={background}>
      <ContentWrapper>
        <HighlightTitle>
          Hello
        </HighlightTitle>
        {/* <NFTMarket /> */}
        <ExchangeList />
      </ContentWrapper>
    </Frame>
  )
}

export default App
