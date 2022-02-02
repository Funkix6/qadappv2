import React from 'react'
import { Header, Home, Dashboard, About } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Overview, Devices, Reports, Users } from './components/Dashboard';

const App = () => {
  return (
      <BrowserRouter>
        <div className='bg-gradient-pinot-noir'>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Dashboard" exact element={<Dashboard />} />
          </Routes>
        </div>   
          <Routes>
            <Route path="Dashboard/Overview" exact element={<Overview />} />
            <Route path="Dashboard/Devices" exact element={<Devices />} />
            <Route path="Dashboard/Reports"exact element={<Reports />} />
            <Route path="Dashboard/Users" exact element={<Users />} />``
          </Routes>
      </BrowserRouter>
  )
}

export default App
