import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomeContent from '../components/HomeContent';
import Services from '../components/Services';
import MaidsProfiles from '../components/MaidsProfiles';
import Footer from '../components/Footer';
  function Home() {
  return (
    <>
      <section className="head">
        <Navbar />
        <HomeContent />
      </section>
      <Services/>
      <MaidsProfiles/>  
      <Footer/>
    </>
  )
}
export default Home;
