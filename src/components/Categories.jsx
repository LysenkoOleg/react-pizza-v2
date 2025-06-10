import React from 'react';

const Categories = (props) => {
	const {
		activeCategories,
		setActiveCategories,
		categories
	} = props;
	
	const onClickHandler = (indexActiveCategory) => {
		setActiveCategories(indexActiveCategory)
	}
	
	return (
		<div className="categories">
			<ul>
				{categories.map((name, index) => (
					<li
						className={index === activeCategories ? 'active' : ''}
						key={index}
						onClick={() => onClickHandler(index)}
					>
						{name}
					</li>
					))}
			</ul>
		</div>
	)
}

export default Categories;