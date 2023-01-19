import { Frame, StyledImage, Title } from './styles'

export const NavigationBar = () => {
  return (
    <Frame>
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
