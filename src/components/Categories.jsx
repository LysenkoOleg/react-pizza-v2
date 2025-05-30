import React from 'react';

const Categories = () => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	]
	
	const [activeCount, setActiveCount] = React.useState(0)
	
	const onClickHandler = (indexActiveCategory) => {
		setActiveCount(indexActiveCategory)
	}
	
	return (
		<div className="categories">
			<ul>
				{categories.map((category, index) => (
					<li
						className={index === activeCount ? 'active' : ''}
						key={index}
						onClick={() => onClickHandler(index)}
					>
						{category}
					</li>
					))}
			</ul>
		</div>
	)
}

export default Categories;