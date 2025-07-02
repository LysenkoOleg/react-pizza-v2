import React, { useMemo, useContext, useEffect } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setSortId, setCurrentPage } from '../redux/slices/filterSlice';

const Home = () => {
	const { searchValue } = useContext(SearchContext)
	const { activeCategories, activeSort, currentPage } = useSelector(state => state.filter);
	const dispatch = useDispatch();
	
	const [pizzas, setPizzas] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	
	const sorts = useMemo(() => [
		{name: 'популярности', sort: 'rating'},
		{name: 'цене', sort: 'price'},
		{name: 'алфавиту', sort: 'title'},
	], [])
	
	const categories = useMemo(() => [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	], [])
	
	const setActiveCategories = (id) => {
		dispatch(setCategoryId(id))
	}
	
	const setActiveSort = (id) => {
		dispatch(setSortId(id))
	}
	
	const setActivePage = (page) => {
		dispatch(setCurrentPage(page))
	}
	
	useEffect(() => {
		setIsLoading(true);
		const url = new URL(`https://683978406561b8d882b085c4.mockapi.io/items?page=${currentPage}&limit=4`);
		url.searchParams.append('sortBy', sorts[activeSort].sort)
		url.searchParams.append('order', 'desc')
		
		if (activeCategories !== 0) {
			url.searchParams.append('category', activeCategories.toString())
		}
		
		if (searchValue) {
			url.searchParams.append('search', searchValue);
		}
		
		axios.get(url)
			.then(response => {
				setPizzas(response.data)
				setIsLoading(false)
			})
			.catch(error => {
				setPizzas([])
				setIsLoading(false)
			})
		window.scrollTo(0, 0);
	}, [activeSort, sorts, activeCategories, categories, searchValue, currentPage])
	
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
			<Pagination setCurrentPage={setActivePage}/>
		</>
	);
};

export default Home;