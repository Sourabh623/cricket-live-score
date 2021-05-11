import logo from './logo.svg';
import './App.css';
import { Button, Grid } from '@material-ui/core';
import Navbar from "./components/Navbar";
import MyCard from './components/MyCard';
import { getMatches } from './api/Api';
import react, { Fragment, useEffect, useState } from 'react';
import React, { Fragement } from "react";
import score from '../src/img/score.svg';


function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch((error) => alert("could not load data"));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1 style={{ textTransform: 'uppercase' }}>Welcome to live cricket app</h1>
      <Grid container>
        <Grid sm="3">
          {/* List here*/}


        </Grid>
        <Grid sm="6">
          {
            matches.map((match) => (
            
              <Fragment >
                {
                  match.type=="Twenty20"?(<MyCard key={match.unique_id} match={match} />):("")
                }
                {
                  match.type=="ODI"?(<MyCard key={match.unique_id} match={match} />):("")

                }
              </Fragment>

            ))
          }
          
        </Grid>
        <Grid sm="2">
          {/* svg img */}
          <img src={score} alt=""/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
