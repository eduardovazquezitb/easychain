import { useState } from 'react'
import CustomImage from '../CustomImage'

const NFTDisplayerPhone = ({ nfts = [] }) => {
  const [currentNft, setCurrentNft] = useState(0)
  const nftData = nfts[currentNft]
  const nextNft = () => {
    setCurrentNft((currentNft + 1) % nfts.length)
  }
  return (
    <>
      {nfts.length === 0
        ? <div />
        : <CustomImage
            srcList={[nftData.file_url, nftData.cached_file_url, nftData.file_url, process.env.PUBLIC_URL + '/images/not-found.webp']}
            alt={nftData.contract_address}
            chain={nftData.chain}
            contractAddress={nftData.contract_address}
            name={nftData.contract.name}
            onClick={nextNft}
          />}
    </>
  )
}

export default NFTDisplayerPhone
