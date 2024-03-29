import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Pages/Shop.module.css';
import { motion } from 'framer-motion';

import { products } from '../assets/products.js';

function Shop() {
	const shopDisplay = products.map((currentElement, index) => {
		return (
			<div key={index} className={styles.productDisplay}>
				<Link to={`/shopping-cart/shop/${index}`}>
					<img src={currentElement.img} alt={currentElement.alt} />
					<h2>${currentElement.price}</h2>
				</Link>
			</div>
		);
	});

	const contentContainerVariants = {
		hidden: { y: '-50vh' },
		visible: {
			y: 0,
			transition: { type: 'spring', duration: 0.33 },
		},
	};

	const productsContainerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<>
			<head>
				<title>Clocky Shop | Shop</title>
				<meta
					property='og:url'
					content='https://notstoe.github.io/shopping-cart/shop'
				/>
			</head>
			<motion.div
				className={styles.shopContent}
				variants={contentContainerVariants}
				initial='hidden'
				animate='visible'
			>
				<h1>WALL CLOCKS</h1>
				<motion.div variants={productsContainerVariants}>
					{shopDisplay}
				</motion.div>
			</motion.div>
		</>
	);
}

export default Shop;
