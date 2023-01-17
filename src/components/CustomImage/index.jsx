import { useState } from 'react'
import { Frame, FrameInner, SingleImage, FlipCardFront, FlipCardBack } from './styles'

const CustomImage = ({
  srcList = [process.env.PUBLIC_URL + '/images/not-found.webp'],
  alt = '',
  chain = '',
  contractAddress = '',
  creatorAddress = '',
  name = '',
  onClick = null
}) => {
  const [currentSrc, setCurrentSrc] = useState(0)
  const [hoverState, setHoverState] = useState(false)
  if (srcList[currentSrc] === null) { setCurrentSrc(currentSrc + 1) }

  const handleClick = () => {
    if (onClick !== null) {
      onClick()
    }
  }

  return (
    <Frame
      onMouseOver={() => { setHoverState(true) }}
      onMouseOut={() => { setHoverState(false) }}
      onClick={handleClick}
    >
      <FrameInner hover={hoverState}>
        <FlipCardFront>
          <SingleImage
            src={srcList[currentSrc]}
            onError={() => setCurrentSrc(currentSrc + 1)}
            alt={alt}
            loading='lazy'
            hidden={hoverState}
          />
        </FlipCardFront>
        <FlipCardBack>
          <p>{name}</p>
          <p>{chain}</p>
          <p>{contractAddress}</p>
          <p>{creatorAddress}</p>
        </FlipCardBack>
      </FrameInner>
    </Frame>
  )
}

export default CustomImage
