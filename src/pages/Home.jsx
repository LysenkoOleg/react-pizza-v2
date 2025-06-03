import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';

const Home = () => {
	const [pizzas, setPizzas] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	
	React.useEffect(() => {
		fetch('https://683978406561b8d882b085c4.mockapi.io/items')
			.then(data => data.json()).then(json => {
			setPizzas(json)
			setIsLoading(false)
		})
	}, [])
	
	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoading
						? [...new Array(6)].map(() => <Skeleton />)
						: pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
				}
			</div>
		</>
	);
};

export default Home;