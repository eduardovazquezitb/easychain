import { useState } from 'react'
import { Frame, Title, StyledImage } from './styles'

const Home = () => {
  const [hoverState, setHoverState] = useState(false)
  return (
    <Frame>
      <Title
        hover={hoverState}
      >
        EasyChain
      </Title>
      <StyledImage
        src={process.env.PUBLIC_URL + '/EasyChainLogo.png'}
        alt='logo'
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        hover={hoverState}
      />
    </Frame>
  )
}

export default Home
