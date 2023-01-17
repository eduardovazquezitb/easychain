import { useState } from 'react'
import { StyledImg } from './styles'

const NFTDisplayerPhone = ({ nfts = [] }) => {
  const [currentNft, setCurrentNft] = useState(0)
  const nftData = nfts[currentNft]
  return (
    <>
      {nfts.length === 0
        ? <div />
        : <StyledImg
            src={[nftData.file_url, nftData.cached_file_url, process.env.PUBLIC_URL + '/images/not-found.webp']}
            alt={nftData.file_url}
          />}
    </>
  )
}

export default NFTDisplayerPhone
