import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Pages/Home.module.css';

function Home() {
	return (
		<>
			<head>
				<title>Clocky Shop</title>
				<meta
					property='og:url'
					content='https://notstoe.github.io/shopping-cart'
				/>
			</head>
			<div className={styles.homeContent}>
				<h1>
					Order your exclusive <span>clock</span> with us today!
				</h1>
				<div>
					<p>"Better three hours too soon than a minute too late."</p>
					<span> – William Shakespeare</span>
				</div>
				<Link to='/shopping-cart/shop'>VISIT THE SHOP</Link>
			</div>
		</>
	);
}

export default Home;
