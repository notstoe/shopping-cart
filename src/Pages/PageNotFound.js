import React from "react";

import styles from "../styles/Pages/PageNotFound.module.css";
import lostIcon from "../assets/lostIcon.svg";

export default function PageNotFound() {
	return (
		<div className={styles.notFoundContainer}>
			<span>
				Error 404: Oops! We couldn't find the page you were looking for.
			</span>
			<img src={lostIcon} alt="lost character icon" />
		</div>
	);
}
