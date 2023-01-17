import { useState } from 'react'
import { Frame, FlexBox, Header, Content, Footer } from './styles'
import { useNFTPort } from '../ApiCaller'
import LoadingComponent from '../LoadingComponent'
import FilterInput from '../FilterInput'
import useAppVersion from '../GetWindowDimensions'
import NFTDisplayerDesktop from '../NFTDisplayerDesktop'
import NFTDisplayerPhone from '../NFTDisplayerPhone'

const NFTMarket = () => {
  const [queryState, setQueryState] = useState({ chain: 'polygon' })
  const appVersion = useAppVersion()

  console.log(appVersion)

  const nfts = useNFTPort(queryState)

  const filterOptions = ['Chain', 'Contract Address', 'Creator Address']

  const onSubmit = ({ prop = {} }) => {
    if (Object.keys(prop).length === 2) {
      const newQuery = structuredClone(queryState)
      if (prop.key === 'Chain') {
        newQuery.chain = prop.value
      }
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
          {nfts.isResolved
            ? appVersion === 'desktop'
              ? <NFTDisplayerDesktop />
              : <NFTDisplayerPhone nfts={nfts.response.data.nfts} />
            : <LoadingComponent />}
        </Content>
        <Footer />
      </FlexBox>
    </Frame>
  )
}

export default NFTMarket
