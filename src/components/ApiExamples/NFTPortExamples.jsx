import { useNFTPort } from '../ApiCaller'
import { Img } from 'react-image'
import LoadingComponent from '../LoadingComponent'

const NftDisplayer = ({ nftData = { chain: '', contract_address: '', creator_address: '', token_id: '' } }) => {
  return (
    <>
      <p>
        <b>Chain:</b> {nftData.chain}
        <b>Contract Address:</b> {nftData.contract_address}
        <b>Creator Address:</b> {nftData.creator_address}
        <b>Token Id:</b> {nftData.token_id}
      </p>
      <Img
        src={[nftData.file_url, nftData.cached_file_url, process.env.PUBLIC_URL + '/images/not-found.webp']}
        alt={nftData.file_url}
      />
    </>
  )
}

const NftsDisplayer = ({ nfts = [] }) => {
  return (
    <ul>
      {nfts.map((nft, index) =>
        <li key={index}>
          <NftDisplayer nftData={nft} />
        </li>)}
    </ul>
  )
}

export const RawMarketDisplayer = ({ filter = '' }) => {
  const nfts = useNFTPort({ chain: 'polygon' })
  console.log(nfts)
  return (
    <>
      {nfts.isResolved
        ? <NftsDisplayer nfts={nfts.response.data.nfts} />
        : <LoadingComponent />}
    </>
  )
}
