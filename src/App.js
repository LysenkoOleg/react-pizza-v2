import './scss/app.scss'

import React, { createContext, useState } from 'react';

import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

export const SearchContext = createContext({})

function App() {
	const [searchValue, setSearchValue] = useState('')
	
  return (
	  <div className="wrapper">
		  <SearchContext.Provider value={{ searchValue, setSearchValue }}>
			  <Header />
			  <div className="content">
				  <div className="container">
					  <Routes>
						  <Route path='/' element={<Home />}/>
						  <Route path='/cart' element={<Cart />}/>
						  <Route path='*' element={<NotFound />}/>
					  </Routes>
				  </div>
			  </div>
		  </SearchContext.Provider>
	  </div>
  );
}

export default App;
