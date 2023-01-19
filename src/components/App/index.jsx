import { Frame, ContentWrapper } from './styles'
import Home from '../Home'
import { NavigationBar } from '../NavigationBar'
import SideBar from '../SideBar'

function App () {
  const background = process.env.PUBLIC_URL + '/images/backgrounds/background' + Math.floor(Math.random() * 4) + '.png'
  return (
    <Frame background={background}>
      <SideBar />
      <ContentWrapper>
        <NavigationBar />
        {/* <NFTMarket /> */}
        {/* <ExchangeList /> */}
        <Home />
      </ContentWrapper>
    </Frame>
  )
}

export default App
