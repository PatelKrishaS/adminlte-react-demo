import { useState } from 'react'
// import './App.css'
import './assets/css/adminlte.min.css'
import './assets/css/adminlte.css'
import { Sidebar } from './components/layouts/Sidebar'
import { Navbar } from './components/layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/user/Dashboard'
import { UserProfile } from './components/user/UserProfile'

function App() {

  return (
    <body className='layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded'>
      <div className='app-wrapper'>
        {/* <Sidebar/> */}
        <Routes>
          <Route path='/user' element={<Sidebar/>}>
            <Route path='dashboard' element= {<Dashboard/>}></Route>
            <Route path='profile' element= {<UserProfile/>}></Route>
          </Route>
        </Routes>
      </div>
    </body>
  )
}

export default App
