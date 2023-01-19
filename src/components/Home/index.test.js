import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '.'
import { ThemeProvider } from '@emotion/react'
import { easyChainTheme } from '../../styles/easyChainTheme'

test('title and logo are rendered', () => {
  render(
    <ThemeProvider theme={easyChainTheme}>
      <Home  />
    </ ThemeProvider>
  )

  const title = screen.getByTestId('home-title')
  expect(title).toBeInTheDocument()
  const logo = screen.getByTestId('home-logo')
  expect(logo).toBeInTheDocument()
})

test('logo is visible and title is not', () => {
  render(
    <ThemeProvider theme={easyChainTheme}>
      <Home  />
    </ ThemeProvider>
  )
  
  const title = screen.getByTestId('home-title')
  const titleStyle = window.getComputedStyle(title)
  expect(titleStyle.opacity).toBe('0')
  const logo = screen.getByTestId('home-logo')
  const logoStyle = window.getComputedStyle(logo)
  expect(logoStyle.opacity).toBe('1')
})
