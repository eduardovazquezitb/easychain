import { Frame, Header, LastColumnHeader, LastColumnBody, Hyperlink, BodyRow } from './styles'
import useAppVersion from '../GetWindowDimensions'
import data from '../../resources/dataSamples/topExchanges'

const ExchangeListDesktop = () => {
  return (
    <Frame>
      <Header>
        <tr>
          <th>#</th>
          <th>Exchange</th>
          <th>Monthly Visits</th>
        </tr>
      </Header>
      <tbody>
        {data.map((exchange, index) =>
          <BodyRow key={index}>
            <td>{(index + 1).toString()}</td>
            <td>
              <img
                src={process.env.PUBLIC_URL + '/images/exchangesIcons/' + exchange.icon}
                alt={exchange.name}
              />
              <Hyperlink href={exchange.url}>{exchange.name}</Hyperlink>
            </td>
            <td>{exchange.visits}</td>
          </BodyRow>
        )}
      </tbody>
    </Frame>
  )
}

const ExchangeListPhone = () => {
  return (
    <Frame>
      <Header>
        <tr>
          <th>#</th>
          <LastColumnHeader>Exchange</LastColumnHeader>
        </tr>
      </Header>
      <tbody>
        {data.map((exchange, index) =>
          <BodyRow key={index}>
            <td>{(index + 1).toString()}</td>
            <LastColumnBody>
              <Hyperlink href={exchange.url}>{exchange.name}</Hyperlink>
              <img
                src={process.env.PUBLIC_URL + '/images/exchangesIcons/' + exchange.icon}
                alt={exchange.name}
              />
            </LastColumnBody>
          </BodyRow>
        )}
      </tbody>
    </Frame>
  )
}

const ExchangeList = () => {
  const appVersion = useAppVersion()

  if (appVersion === 'desktop') {
    return <ExchangeListDesktop />
  }
  return <ExchangeListPhone />
}

export default ExchangeList
