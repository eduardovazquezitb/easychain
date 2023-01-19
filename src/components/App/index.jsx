import { Routes, Route } from 'react-router-dom'
import { Frame, ContentWrapper } from './styles'
import Home from '../Home'
import Menu from '../Menu'
import NFTMarket from '../NFTMarket'
import ExchangeList from '../ExchangeList'

function App () {
  const background = process.env.PUBLIC_URL + '/images/backgrounds/background' + Math.floor(Math.random() * 4) + '.png'
  return (
    <Frame background={background}>
      <Menu />
      <ContentWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nftmarket' element={<NFTMarket />} />
          <Route path='/exchangelist' element={<ExchangeList />} />
        </Routes>
      </ContentWrapper>
    </Frame>
  )
}

export default App
