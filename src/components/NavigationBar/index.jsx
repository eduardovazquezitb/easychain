import { Frame, StyledImage, Title, SideBarButton } from './styles'

const NavigationBar = ({
  appVersion = 'desktop',
  onClick = null
}) => {
  const handleOnClick = () => {
    if (onClick !== null) { onClick() }
  }
  return (
    <Frame>
      {appVersion !== 'desktop'
        ? <SideBarButton onClick={handleOnClick} src={process.env.PUBLIC_URL + '/images/Menu.png'} alt='menu' />
        : <div />}
      <StyledImage
        src={process.env.PUBLIC_URL + '/EasyChainLogo.png'}
        alt='logo'
        data-testid='nav-logo'
      />
      <Title
        data-testid='nav-title'
      >
        EasyChain
      </Title>

    </Frame>
  )
}

export default NavigationBar
