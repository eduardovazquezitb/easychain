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
  const closeSideBar = () => {
    setIsSideBarHidden(true)
  }
  return (
    <>
      <SideBar
        isHidden={isSideBarHidden && appVersion !== 'desktop'}
        onClick={closeSideBar}
      />
      <NavigationBar
        appVersion={appVersion}
        onClick={handleButtonClick}
      />
    </>
  )
}

export default Menu
