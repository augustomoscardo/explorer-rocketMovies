import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewMovie } from '../pages/NewMovie'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewMovie />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/movies/:id' element={<Details />} />

      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}