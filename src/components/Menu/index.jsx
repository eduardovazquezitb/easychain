import { useState } from 'react'
import useAppVersion from '../GetWindowDimensions'
import SideBar from '../SideBar'
import NavigationBar from '../NavigationBar'

const Menu = ({ onChange = null }) => {
  const appVersion = useAppVersion()
  const [isSideBarHidden, setIsSideBarHidden] = useState(true)
  const handleButtonClick = () => {
    setIsSideBarHidden(!isSideBarHidden)
  }
  const closeSideBar = (newContentState) => {
    if (onChange !== null) { onChange(newContentState) }
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
