import { Frame, ListItem } from './styles'

const SideBar = ({ isHidden = true, onClick = null }) => {
  if (isHidden) {
    return (<div />)
  }
  const handleOnClick = () => {
    if (onClick !== null) {
      onClick()
    }
  }
  return (
    <Frame>
      <ListItem to='/' onClick={handleOnClick}>Home</ListItem>
      <ListItem to='/cryptomarket' onClick={handleOnClick}>Crypto Market</ListItem>
      <ListItem to='/nftmarket' onClick={handleOnClick}>NFT Market</ListItem>
      <ListItem to='/exchangelist' onClick={handleOnClick}>Exchange List</ListItem>
    </Frame>
  )
}

export default SideBar
