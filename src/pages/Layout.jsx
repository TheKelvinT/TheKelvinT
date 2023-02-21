import React from 'react'
import Sidebar from '../components/Sidebar'
import Socialbar from '../components/SocialBar'


const Layout = ({navlinks,selectedPage, setSelectedPage}) => {
  return (
    <div>
      <Sidebar 
        navlinks={navlinks}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Socialbar/>
    </div>
  )
}

export default Layout
