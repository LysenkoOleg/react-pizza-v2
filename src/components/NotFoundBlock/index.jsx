import React from 'react';
import styles from './NotFoundBlock.module.scss'

const NotFound = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br/>
				Ничего не найдено!
			</h1>
			<p className={styles.text}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
		</div>
	);
};

export default NotFound;