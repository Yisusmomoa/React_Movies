import React from 'react'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <main>
        <Outlet></Outlet>
    </main>
  )
}
