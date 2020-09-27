import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api';
import coronaimage from './images/image.png';

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
                <img className={styles.image} src={coronaimage} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <h3 className={styles.websiteTitle}>About Developer</h3>
                <span> Hello I am Deepesh and I'm intensively learning and putting to use my knowledge of programming in Javascript into building web and native applications.</span>
                <ul>Technology used
                    <li>React JS</li>
                    <li>Chart JS</li>
                    <li><a href="https://covid19.mathdro.id/api" target="_blank" rel="noopener noreferrer">Api</a></li>
                </ul>
                <a className={styles.button} href="https://www.github.com/deepyes02">Visit My Github</a>
            </div>
        )
    }
}

export default App;