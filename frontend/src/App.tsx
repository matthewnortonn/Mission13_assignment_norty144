import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import TopBanner from './Blah';
//import MovieList from './Movies';
import Navbar from './NavbarFile';
import Home from './pages/Home';
import MovieListing from './pages/MovieListing';
import Podcast from './pages/Podcast';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <TopBanner
//         saying="Joel Hilton's Movies"
//         saying1="This website is all about Joel Hilton's love for movies and his experience of making a podcast about rating movies of all kinds."
//       />
//       <MovieList />
//     </div>
//   );
// }

function App() {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Home />;
      break;
    case '/movies':
      component = <MovieListing />;
      break;
    case '/podcast':
      component = <Podcast />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
