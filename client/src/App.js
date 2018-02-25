import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './component/navbar/search_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Route, Switch } from 'react-router-dom';
import {Redirect, Router} from 'react-router';
import GuestNavbar from './component/navbar/GuestNavbar';
import TabExample from './component/slide/slide.js';
import BottomNav from './component/bottom/bottomNav';
import { Toolbar } from 'material-ui/Toolbar';

import Testo1 from './testo1';
import Testo2 from './testo2';

class App extends Component {
  constructor(props){
    super(props);
  }
  /*render() {
    return (
      <div>
       
          
              <MuiThemeProvider>
              <div>
                
                <GuestNavbar />
              </div>
              <div>
                <TabExample />
              </div>
              <BottomNav />
              <Toolbar>
              </Toolbar>
              </MuiThemeProvider>
      </div>
    );
  }*/

  render() {
    return (
      <div>
        <Testo2 />
      </div>
    )
  }
}

export default App;
