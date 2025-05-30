import './scss/app.scss'

import React from 'react';

import Header from './components/Header'
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import Categories from './components/Categories';

function App() {
	const [pizzas, setPizzas] = React.useState([])
	
	React.useEffect(() => {
	    fetch('https://683978406561b8d882b085c4.mockapi.io/items')
		    .then(data => data.json()).then(json => setPizzas(json))
	}, [])
	
  return (
	  <div className="wrapper">
		  <Header />
		  <div className="content">
			  <div className="container">
				  <div className="content__top">
					  <Categories />
					  <Sort />
				  </div>
				  <h2 className="content__title">Все пиццы</h2>
				  <div className="content__items">
					  {
							pizzas.map(item => (
								<PizzaBlock
									{...item}
									key={item.id}
								/>
							))
					  }
				  </div>
			  </div>
		  </div>
	  </div>
  );
}

export default App;
