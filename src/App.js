import React from 'react';
import Container from './components/Container/Container';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import PageNotFound from './components/PageNotFound/PageNotFound';
import List from './components/List/List';
const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/list/:listId' element={<List />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
