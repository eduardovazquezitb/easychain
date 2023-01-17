import CustomImage from '../CustomImage'
import ImageGrid from '../ImageGrid'

const NFTDisplayerDesktop = ({ nfts = [] }) => {
  const imagesData = nfts.filter((nft, index) => index < 12).map((nft, index) => {
    const nftData = {}
    nftData.srcList = [nft.file_url, nft.cached_file_url, nft.file_url, process.env.PUBLIC_URL + '/images/not-found.webp']
    nftData.alt = nft.contract_address
    nftData.chain = nft.chain
    nftData.contractAddress = nft.contract_address
    nftData.name = nft.contract.name
    return nftData
  })
  return (
    <ImageGrid parts={3}>
      {imagesData.map((imageData, index) => (
        <CustomImage
          key={index}
          srcList={imageData.srcList}
          alt={imageData.alt}
          chain={imageData.chain}
          contractAddress={imageData.contractAddress}
          name={imageData.name}
        />
      ))}
    </ImageGrid>

  )
}

export default NFTDisplayerDesktop
