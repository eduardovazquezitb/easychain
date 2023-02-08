import { Frame, ListItem } from './styles'

const SideBar = ({ isHidden = true, onClick = null }) => {
  if (isHidden) {
    return (<div />)
  }
  const handleOnClick = (newContentState) => {
    if (onClick !== null) {
      onClick(newContentState)
    }
  }
  return (
    <Frame>
      <ListItem to='/' onClick={() => handleOnClick('')}>Home</ListItem>
      <ListItem to='/cryptomarket' onClick={() => handleOnClick('cryptomarket')}>Crypto Market</ListItem>
      <ListItem to='/nftmarket' onClick={() => handleOnClick('nftmarket')}>NFT Market</ListItem>
      <ListItem to='/exchangelist' onClick={() => handleOnClick('exchangelist')}>Exchange List</ListItem>
    </Frame>
  )
}

export default SideBar
