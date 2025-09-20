import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { SpecialityMenu } from '../components/SpecialityMenu'
import { TopDoctors } from '../components/TopDoctors'
import { Banner } from '../components/Banner'

export const Home = () => {
  return (
    <>
        <Header/>
        <SpecialityMenu/>
        <TopDoctors/>
        <Banner/>
    </>
  )
}
