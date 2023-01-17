import CustomImage from '../CustomImage'
import ImageList from '@mui/material/ImageList'

const NFTDisplayerDesktop = ({ nfts = [] }) => {
  const imageData = nfts.map((nft, index) => {
    const nftData = {}
    nftData.srcList = [nft.file_url, nft.cached_file_url, nft.file_url, process.env.PUBLIC_URL + '/images/not-found.webp']
    nftData.alt = nft.contract_address
    nftData.chain = nft.chain
    nftData.contractAddress = nft.contract_address
    nftData.name = nft.contract.name
    return nftData
  })
  return (
    <ImageList variant='masonry' cols={3} gap={8}>
      <CustomImage
        srcList={imageData[0].srcList}
        alt={imageData[0].alt}
        chain={imageData[0].chain}
        contractAddress={imageData[0].contractAddress}
        name={imageData[0].name}
      />
    </ImageList>
  )
}

export default NFTDisplayerDesktop
