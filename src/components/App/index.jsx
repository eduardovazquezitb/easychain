import { Frame, HighlightTitle, ContentWrapper } from './styles'
import ExchangeList from '../ExchangeList'

function App () {
  return (
    <Frame>
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
