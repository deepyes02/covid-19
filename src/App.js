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


        // console.log(fetchedData); 
        this.setState({ data: fetchedData, country: country });
        //fetch data
        //set the state
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
                <h4>About Developer</h4>
                <span> Hello I am Deepesh and I'm intensively learning and putting to use my knowledge of programming in Javascript into building web and native applications. This app is showing data from an api and will be correct to the extent of the accuracy of the data available.</span>
                <h4>Made with ❤ Using </h4>
                <ul>
                    <li>React JS</li>
                    <li>Chart JS</li>
                    <li><a href="https://covid19.mathdro.id/api" target="_blank" rel="noopener noreferrer">Api</a></li>
                </ul>
                </div>
                <a className={styles.button} href="https://www.github.com/deepyes02">Visit My Github</a>
            </div>
        )
    }
}

export default App;