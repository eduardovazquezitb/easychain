import { Frame, ContentWrapper } from './styles'
import Home from '../Home'
import Menu from '../Menu'

function App () {
  const background = process.env.PUBLIC_URL + '/images/backgrounds/background' + Math.floor(Math.random() * 4) + '.png'
  return (
    <Frame background={background}>
      <Menu />
      <ContentWrapper>
        {/* <NFTMarket /> */}
        {/* <ExchangeList /> */}
        <Home />
      </ContentWrapper>
    </Frame>
  )
}

export default App
