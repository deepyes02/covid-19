import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
//for providing styles for different components
import cx from 'classnames';


const Cards = ({data: {confirmed, deaths, recovered, lastUpdate}}) => {

    if (!confirmed){
        return "Loading...";

    }
    // console.log(confirmed.value, deaths.value, recovered.value, lastUpdate.value);
    
    
    return(
        <div className={styles.container}>
            <div className={styles.date}>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            </div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs ={12} md ={3} className={cx(styles.card, styles.infected)}>
                    <CardContent> 
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {1} separator = ","/>
                        </Typography>
    <Typography variant="body2">Percentage of World Population(%): {(confirmed.value/7800000000).toFixed(5)}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs ={12} md ={3} className={cx(styles.card, styles.recovered)}>

                    <CardContent> 
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp start = {0} end = {recovered.value} duration = {1} separator = ","/>
                            </Typography>
                        <Typography variant="body2">Percentage of World Population(%): {(recovered.value/7800000000).toFixed(5)}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs ={12} md ={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent> 
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start = {0} end = {deaths.value} duration = {1} separator = ","/>
                        </Typography>
                        <Typography  variant="body2">Percentage of World Population(%): {(deaths.value/780000000).toFixed(5)}  </Typography>
                    </CardContent>
                </Grid>

            </Grid>


        </div>
    );
}

export default Cards;