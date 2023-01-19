import { Frame, StyledImage, Title } from './styles'

const NavigationBar = () => {
  return (
    <Frame>
      {/* <SideBarButton /> */}
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
