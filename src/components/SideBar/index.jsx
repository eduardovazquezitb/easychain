import { Frame, ListItem } from './styles'

const SideBar = ({ isHidden = true, onClick = null }) => {
  const pages = [
    {
      name: 'Menu'
    },
    {
      name: 'NFT Market'
    },
    {
      name: 'Exchange List'
    }
  ]
  const handleOnClick = () => {
    if (onClick !== null) { onClick() }
  }
  if (isHidden) {
    return (<div />)
  }
  return (
    <Frame>
      {pages.map((page, it) =>
        <ListItem key={it} onClick={handleOnClick}>{page.name}</ListItem>
      )}
    </Frame>
  )
}

export default SideBar
