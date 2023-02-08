import { useState, useEffect } from 'react'
import { Frame, ContentWrapper } from './styles'
import Home from '../Home'
import Menu from '../Menu'
import CryptoMarket from '../CryptoMarket'
import NFTMarket from '../NFTMarket'
import ExchangeList from '../ExchangeList'

function App () {
  const [contentState, setContentState] = useState('')
  const [backgroundState, setBackgroundState] = useState(process.env.PUBLIC_URL + '/images/backgrounds/background0.png')
  useEffect(() => {
    setBackgroundState(process.env.PUBLIC_URL + '/images/backgrounds/background' + Math.floor(Math.random() * 4) + '.png')
  }, [])
  const handleContentChange = (newContentState) => {
    setContentState(newContentState)
  }
  return (
    <Frame background={backgroundState}>
      <Menu onChange={handleContentChange} />
      <ContentWrapper>
        {
          contentState === 'cryptomarket'
            ? <CryptoMarket />
            : contentState === 'nftmarket'
              ? <NFTMarket />
              : contentState === 'exchangelist'
                ? <ExchangeList />
                : <Home />
        }
      </ContentWrapper>
    </Frame>
  )
}

export default App
