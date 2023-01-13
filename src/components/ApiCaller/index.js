import axios from 'axios'
import { useState, useEffect } from 'react'

export const useNFTPort = ({ chain = 'ethereum' }) => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  const fetchData = async (config) => {
    const response = await axios.get('https://api.nftport.xyz/v0/nfts?chain=' + chain + '&include=all', config)
    setResponseState({ response, isResolved: true })
  }

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: '89959bd1-d013-40bd-9a4a-5f435a78eb86'
      }
    }
    fetchData(config)
  }, [chain])

  return responseState
}
