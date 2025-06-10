import React, { useMemo } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';

const Home = () => {
	const [pizzas, setPizzas] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	
	const [activeSort, setActiveSort] = React.useState(0)
	const sorts = useMemo(() => [
		{name: 'популярности', sort: 'rating'},
		{name: 'цене', sort: 'price'},
		{name: 'алфавиту', sort: 'title'},
	], [])
	
	console.log(activeSort);
	
	const [activeCategories, setActiveCategories] = React.useState(0);
	const categories = useMemo(() => [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	], [])
	
	React.useEffect(() => {
		setIsLoading(true);
		const url = new URL('https://683978406561b8d882b085c4.mockapi.io/items');
		url.searchParams.append('sortBy', sorts[activeSort].sort)
		url.searchParams.append('order', 'desc')
		
		if (activeCategories !== 0) {
			console.log(activeCategories);
			url.searchParams.append('category', activeCategories.toString())
		}
		
		fetch(url)
			.then(data => data.json()).then(json => {
			setPizzas(json)
			setIsLoading(false)
		});
		window.scrollTo(0, 0);
	}, [activeSort, sorts, activeCategories, categories])
	
	return (
		<>
			<div className="content__top">
				<Categories
					activeCategories={activeCategories}
					setActiveCategories={setActiveCategories}
					categories={categories}
				/>
				<Sort
					activeSort={activeSort}
					setActiveSort={setActiveSort}
					sorts={sorts}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoading
						? [...new Array(6)].map((value, index) => <Skeleton key={index}/>)
						: pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
				}
			</div>
		</>
	);
};

export default Home;