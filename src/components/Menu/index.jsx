import { useState } from 'react'
import useAppVersion from '../GetWindowDimensions'
import SideBar from '../SideBar'
import NavigationBar from '../NavigationBar'

const Menu = () => {
  const appVersion = useAppVersion()
  const [isSideBarHidden, setIsSideBarHidden] = useState(true)
  const handleButtonClick = () => {
    setIsSideBarHidden(!isSideBarHidden)
  }
  return (
    <>
      <SideBar
        isHidden={isSideBarHidden && appVersion !== 'desktop'}
        onClick={handleButtonClick}
      />
      <NavigationBar
        appVersion={appVersion}
        onClick={handleButtonClick}
      />
    </>
  )
}

export default Menu
