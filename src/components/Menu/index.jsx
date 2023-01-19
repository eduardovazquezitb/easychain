import { useState } from 'react'
import useAppVersion from '../GetWindowDimensions'
import SideBar from '../SideBar'
import NavigationBar from '../NavigationBar'

const Menu = () => {
  const appVersion = useAppVersion()
  const [isSideBarHidden, setIsSideBarHidden] = useState(appVersion !== 'desktop')
  return (
    <>
      <SideBar />
      <NavigationBar appVersion={appVersion} />
    </>
  )
}

export default Menu
