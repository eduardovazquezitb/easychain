import { useState } from 'react'
import { Frame, FlexBox, Header, Content, Footer } from './styles'
import { getNFTs } from '../ApiCaller'
import LoadingComponent from '../LoadingComponent'
import FilterInput from '../FilterInput'
import useAppVersion from '../GetWindowDimensions'
import NFTDisplayerDesktop from '../NFTDisplayerDesktop'
import NFTDisplayerPhone from '../NFTDisplayerPhone'
import useApiCallState from '../ApiCallState'

const NFTsDisplayer = ({ nfts = [] }) => {
  const appVersion = useAppVersion()

  if (appVersion === 'desktop') {
    return <NFTDisplayerDesktop nfts={nfts} />
  }
  return <NFTDisplayerPhone nfts={nfts} />
}

const NFTMarket = () => {
  const [queryState, setQueryState] = useState({ chain: 'polygon' })

  const nfts = useApiCallState({ query: getNFTs, queryParams: queryState })

  const filterOptions = [
    { name: 'chain', type: 'select', options: ['polygon', 'ethereum', 'goerli'] }
  ]

  const onSubmit = ({ prop = {} }) => {
    if (Object.keys(prop).length === 2) {
      const newQuery = structuredClone(queryState)
      newQuery[prop.key] = prop.value
      setQueryState(newQuery)
    }
  }

  return (
    <Frame>
      <FlexBox>
        <Header>
          <FilterInput
            options={filterOptions}
            onChange={(e) => { onSubmit(e) }}
          />
        </Header>
        <Content>
          {nfts.state === 'pending'
            ? <LoadingComponent />
            : nfts.state === 'error'
              ? <p>EN TU MADRE</p>
              : <NFTsDisplayer nfts={nfts.data.nfts} />}
        </Content>
        <Footer />
      </FlexBox>
    </Frame>
  )
}

export default NFTMarket
