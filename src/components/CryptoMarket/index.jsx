import { useState } from 'react'
import { Frame, Header, LastColumnHeader, PercentageChangeLast, BodyRow, TableHeader, FlexBox, Content, StyledImage, LogoPlusName, PercentageChange } from './styles'
import useAppVersion from '../GetWindowDimensions'
import { useCoinsMarket, useSupportedCurrencies } from '../ApiCaller'
import LoadingComponent from '../LoadingComponent'
import FilterInput from '../FilterInput'

const CryptoMarketDesktop = ({ data = [], currency = 'usd' }) => {
  return (
    <Frame>
      <TableHeader>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>24 h</th>
        </tr>
      </TableHeader>
      <tbody>
        {data.map((coin, index) =>
          <BodyRow key={index}>
            <td>{(index + 1).toString()}</td>
            <LogoPlusName>
              <StyledImage
                src={coin.image}
                alt={coin.name}
              />
              <p>{coin.name}</p>
            </LogoPlusName>
            <td>{coin.current_price + ' ' + currency}</td>
            <PercentageChange isPositive={coin.price_change_percentage_24h >= 0}>{coin.price_change_percentage_24h}</PercentageChange>
          </BodyRow>
        )}
      </tbody>
    </Frame>
  )
}

const CryptoMarketPhone = ({ data = [], currency = 'usd' }) => {
  return (
    <Frame>
      <TableHeader>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <LastColumnHeader>24 h</LastColumnHeader>
        </tr>
      </TableHeader>
      <tbody>
        {data.map((coin, index) =>
          <BodyRow key={index}>
            <td>{(index + 1).toString()}</td>
            <LogoPlusName>
              <StyledImage
                src={coin.image}
                alt={coin.name}
              />
              <p>{coin.name}</p>
            </LogoPlusName>
            <td>{parseFloat(coin.current_price).toFixed(3) + ' ' + currency}</td>
            <PercentageChangeLast isPositive={coin.price_change_percentage_24h >= 0}>{parseFloat(coin.price_change_percentage_24h).toFixed(2)}</PercentageChangeLast>
          </BodyRow>
        )}
      </tbody>
    </Frame>
  )
}

const CryptoMarketDisplayerFork = ({ data = [], currency = 'usd' }) => {
  const appVersion = useAppVersion()

  if (appVersion === 'desktop') {
    return <CryptoMarketDesktop data={data} currency={currency} />
  }
  return <CryptoMarketPhone data={data} currency={currency} />
}

const CryptoMarket = () => {
  const [queryState, setQueryState] = useState({ currency: 'usd', order: 'market_cap_desc', perPage: 100, page: 1 })
  const currencyList = useSupportedCurrencies()
  const coinsMarket = useCoinsMarket(queryState)

  const getCurrencyList = () => {
    if (currencyList.isResolved) { return currencyList.response }
    return ['usd', 'eur']
  }

  const filterOptions = () => [
    { name: 'currency', type: 'select', options: getCurrencyList() },
    { name: 'order', type: 'select', options: ['market_cap_desc', 'gecko_desc', 'gecko_asc', 'market_cap_asc', 'market_cap_desc', 'volume_asc', 'volume_desc', 'id_asc', 'id_desc'] },
    { name: 'perPage', type: 'text' },
    { name: 'page', type: 'text' }
  ]

  const onSubmit = ({ prop = {} }) => {
    if (Object.keys(prop).length === 2) {
      const newQuery = structuredClone(queryState)
      newQuery[prop.key] = prop.value
      setQueryState(newQuery)
    }
  }
  return (
    <FlexBox>
      <Header>
        <FilterInput
          options={filterOptions()}
          onChange={(e) => { onSubmit(e) }}
        />
      </Header>
      <Content>
        {coinsMarket.isResolved
          ? <CryptoMarketDisplayerFork data={coinsMarket.response} currency={queryState.currency} />
          : <LoadingComponent />}
      </Content>
    </FlexBox>
  )
}

export default CryptoMarket
