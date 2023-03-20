import React, { useEffect } from 'react';
import Footer from './Footer';
import Home from '../pages/Home'
import Clubs from '../pages/Clubs';
import Navbar from './nav/Navbar'
import { fonts } from '../constants/fonts';
import clubService from './services/clubService';
// react-router-dom
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getClubsSuccess } from '../reducers/clubs';

function App() {
  const dispatch = useDispatch()
  const getClubs = async () => {
    try {
      const response = await clubService.singleClub()
      dispatch(getClubsSuccess(response.data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getClubs()
  }, [])

  const data = useSelector(state => state.reducer.clubs)
  console.log(data)
  return (
    <div className="app">
      <Navbar />
      <div style={{ maxWidth: fonts.container, margin: 'auto' }}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Clubs />} path="/clubs/" />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
