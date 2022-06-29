import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api';
import virus_image from './images/virus_image.jpg';

class App extends React.Component {
	state = {
		data: {},
		country: '',
	}

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });

		// console.log(fetchedData);
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
	}

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<div className={styles.cover}>
					<h2>COVID 19</h2>
					<img className={styles.image} src={virus_image} alt="COVID-19" />
				</div>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
				<div className={styles.websiteTitle}>
					<h4>Made with React by Deepesh</h4>
					<ul>
						<li><a href="https://covid19.mathdro.id/api" target="_blank" rel="noopener noreferrer">Api Link</a></li>
					</ul>
				</div>
				<a className={styles.button} href="https://www.github.com/deepyes02">Visit My Github</a>
			</div>
		)
	}
}

export default App;