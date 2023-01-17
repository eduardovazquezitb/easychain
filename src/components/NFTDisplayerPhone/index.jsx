// import { useState } from 'react'
import { StyledImg } from './styles'

const NFTDisplayerPhone = ({ nfts = [] }) => {
  // const [currentNft, setCurrentNft] = useState(0)
  const currentNft = 0
  const nftData = nfts[currentNft]
  return (
    <>
      {nfts.length === 0
        ? <div />
        : <StyledImg
            srcList={[nftData.file_url, nftData.cached_file_url, nftData.file_url, process.env.PUBLIC_URL + '/images/not-found.webp']}
            alt={nftData.contract_address}
            style='single-image'
            chain={nftData.chain}
            contractAddress={nftData.contract_address}
            name={nftData.contract.name}
          />}
    </>
  )
}

export default NFTDisplayerPhone
