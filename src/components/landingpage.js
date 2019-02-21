import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from './me.png';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
            src={require('./me.png')}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Israel P.Buenrostro</h1>
              
              <p>Full Stack Dev</p>
            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | MySQL | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/israel-pena-buenrostro-767571178/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/IsraelPB" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
