import './App.css'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import PostsList from './components/PostsList';

function App() {
  useEffect(() => {
    ReactGA.initialize("G-4C0BDW492J"); // ✅ Replace with your Measurement ID
    ReactGA.send("pageview");
  }, [])
  return (
    <main className='main'>
      <PostsList />
    </main>
  )

  
}

export default App
   