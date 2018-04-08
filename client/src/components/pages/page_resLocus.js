import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import _ from 'lodash';
import axios from 'axios';


import { Kit_List,
  InvestigatorIDplex,
  PowerPlex16,
  PowerPlex18D,
  AmpFLSTR_Identifiler_Plus,
  Verifiler_Express,
  Globalfiler,
  Forenseq } from '../config/constant';

export default class PageResLocus extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLocus: '',
      locuslist: []
    }

    this.renderLocusList = this.renderLocusList.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/resource/locuslist/')
     .then(function(response){
       console.log(response.data)
       var arrayvar = response.data
       console.log(arrayvar)
       this.setState({ 
         locuslist: arrayvar
      })
     })
  }

  renderLocusList(){
    if(this.state.locuslist !== [])
      return _.map(this.state.locuslist, Locus => {
        return (
         <li key={Locus}><a href="/resource/locus/"> {Locus}</a></li>
        )
      });
  }

  render(){
    
    return (
      <div>
          
          <Row>
          <Col size="3">
            <ul>
               {this.renderLocusList()} 
            </ul>
            <Button>Press </Button>
          </Col>
          <Col>
            <Row>
              <Button color="primary">Graph</Button>
              <Button color="info">Chart</Button>
            </Row>
          </Col>
          </Row>
       
      </div>
    );

  }
}