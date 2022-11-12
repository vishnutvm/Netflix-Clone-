import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';
import {orginals,action,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies} from './urls'


function App() {
  return (
 <div className='App' >
  <Navbar/>
  <Banner/>
  <RowPost url={orginals} title="Netflix Orginals"/>
  <RowPost  url={action} title="Action" isSmall/>
  <RowPost  url={ComedyMovies} title="ComedyMovies" isSmall/>
  <RowPost  url={HorrorMovies} title="HorrorMovies" isSmall/>
  <RowPost  url={ActionMovies} title="ActionMovies" isSmall/>
  <RowPost  url={RomanceMovies} title="RomanceMovies" isSmall/>
  {/* <RowPost  url={Documentaries} title="Documentaries" isSmall/> */}
  <Footer/>
 </div>
  );
}

export default App;
