import { Frame, ListItem } from './styles'

const SideBar = () => {
  const pages = [
    {
      name: 'NFT Market'
    },
    {
      name: 'Exchange List'
    }
  ]
  return (
    <Frame>
      {pages.map((page, it) =>
        <ListItem key={it}>{page.name}</ListItem>
      )}
    </Frame>
  )
}

export default SideBar
