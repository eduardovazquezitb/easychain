import axios from 'axios'
import { useState, useEffect } from 'react'

// NFTPort Documentation https://docs.nftport.xyz/docs

export const useNFTPort = ({ chain = 'ethereum' }) => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  useEffect(() => {
    setResponseState({ response: {}, isResolved: false })
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: '5dc18b30-2dc7-4ade-a710-e26c25aca039'
      }
    }

    const fecthData = async () => {
      const response = await axios.get('https://api.nftport.xyz/v0/nfts?chain=' + chain + '&include=all', config)
      setResponseState({ response, isResolved: true })
    }

    fecthData()
  }, [chain])

  return responseState
}

// CoinGecko Documentation https://www.coingecko.com/es/api/documentation

// List of All Coins without Prices
export const useCoinsList = () => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  useEffect(() => {
    const config = {
      headers: {
        accept: 'application/json'
      }
    }

    const fecthData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list', config)
      setResponseState({ response, isResolved: true })
    }

    fecthData()
  }, [])

  return responseState
}

export const useSupportedCurrencies = () => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  useEffect(() => {
    const config = {
      headers: {
        accept: 'application/json'
      }
    }

    const fecthData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies', config)
      setResponseState({ response, isResolved: true })
    }

    fecthData()
  }, [])

  return responseState
}

// List of All Coins with Prices
export const useCoinsMarket = ({ currency = 'usd', order = 'market_cap_desc', perPage = 100, page = 1 }) => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  useEffect(() => {
    setResponseState({ response: {}, isResolved: false })
    const config = {
      headers: {
        accept: 'application/json'
      }
    }

    const fecthData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + currency + '&order=' + order + '&per_page=' + perPage + '&page=' + page + '&sparkline=false', config)
      setResponseState({ response, isResolved: true })
    }

    fecthData()
  }, [currency, order, perPage, page])

  return responseState
}

export const useCoinPrice = ({ id = 'bitcoin', currency = 'usd' }) => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  useEffect(() => {
    const config = {
      headers: {
        accept: 'application/json'
      }
    }

    const fecthData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=' + id + '&vs_currencies=' + currency, config)
      setResponseState({ response, isResolved: true })
    }

    fecthData()
  }, [id, currency])

  return responseState
}
