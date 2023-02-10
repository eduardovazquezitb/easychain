// NFTPort Documentation https://docs.nftport.xyz/docs

export const getNFTs = ({ chain = 'ethereum' }) => {
  const config = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '5dc18b30-2dc7-4ade-a710-e26c25aca039'
    }
  }

  return fetch('https://api.nftport.xyz/v0/nfts?chain=' + chain + '&include=all&include=default', config)
}

// CoinGecko Documentation https://www.coingecko.com/es/api/documentation

// List of All Coins without Prices
export const getCoinsList = () => {
  const config = {
    headers: {
      accept: 'application/json'
    }
  }

  return fetch('https://api.coingecko.com/api/v3/coins/list', config)
}

export const getSupportedCurrencies = () => {
  const config = {
    headers: {
      accept: 'application/json'
    }
  }

  return fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies', config)
}

// List of All Coins with Prices
export const getCoinsMarket = ({ currency = 'usd', order = 'market_cap_desc', perPage = 100, page = 1 }) => {
  const config = {
    headers: {
      accept: 'application/json'
    }
  }

  return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + currency + '&order=' + order + '&per_page=' + perPage + '&page=' + page + '&sparkline=false', config)
}

export const getCoinPrice = ({ id = 'bitcoin', currency = 'usd' }) => {
  const config = {
    headers: {
      accept: 'application/json'
    }
  }

  return fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + id + '&vs_currencies=' + currency, config)
}
