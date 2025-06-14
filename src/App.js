import './scss/app.scss'

import React, { createContext, useState } from 'react';

import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/filterSlice';
import Cart from './pages/Cart';

export const SearchContext = createContext({})

function App() {
	const [searchValue, setSearchValue] = useState('')
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()
	
  return (
	  <div className="wrapper">
		  <div>
			  <div>
				  <button
					  aria-label="Increment value"
					  onClick={() => dispatch(increment())}
				  >
					  Increment
				  </button>
				  <span>{count}</span>
				  <button
					  aria-label="Decrement value"
					  onClick={() => dispatch(decrement())}
				  >
					  Decrement
				  </button>
			  </div>
		  </div>
		  {/*<SearchContext.Provider value={{ searchValue, setSearchValue }}>*/}
			{/*  <Header />*/}
			{/*  <div className="content">*/}
			{/*	  <div className="container">*/}
			{/*		  <Routes>*/}
			{/*			  <Route path='/' element={<Home />}/>*/}
			{/*			  <Route path='/cart' element={<Cart />}/>*/}
			{/*			  <Route path='*' element={<NotFound />}/>*/}
			{/*		  </Routes>*/}
			{/*	  </div>*/}
			{/*  </div>*/}
		  {/*</SearchContext.Provider>*/}
	  </div>
  );
}

export default App;
