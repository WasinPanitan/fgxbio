import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import GuestNavbar from './containers/GuestNavbar'
import AdminNavbar from './containers/AdminNavbar'
import PageIndex from './components/PageIndex'
import PageSearch from './containers/PageSearch'
import PageManualSearch from './containers/PageManualSearch'
import PageStatisticLocus from './containers/PageStatisticLocus'
import PageStatisticGeographic from './containers/PageStatisticGeographic'
import PageAdminData from './containers/PageAdminData'
import PageAdminSequence from './containers/PageAdminSequence'

import './App.css'

class App extends Component {
  render() {
    const user = localStorage.getItem('user')
    return (
      <div style={{ backgroundColor: '#87e8de' }}>
        <div className="navbar is-dark" />
        <div>
          {user ? (
            <nav>
              <AdminNavbar />
            </nav>
          ) : (
            <div>
              <GuestNavbar />
            </div>
          )}
        </div>
        <Switch>
          <Route exact path="/" component={PageIndex} />{' '}
          <Route exact path="/search" component={PageSearch} />
          <Route exact path="/search/manual/" component={PageManualSearch} />
          <Route exact path="/statistic/locus" component={PageStatisticLocus} />
          <Route
            exact
            path="/statistic/geographic"
            component={PageStatisticGeographic}
          />{' '}
          <Route
            exact
            path="/admindata"
            render={() => {
              if (!user) {
                return <Redirect to="/" />
              } else {
                return <PageAdminData />
              }
            }}
          />
          <Route
            exact
            path="/adminsequence"
            render={() => {
              if (!user) {
                return <Redirect to="/" />
              } else {
                return <PageAdminSequence />
              }
            }}
          />
        </Switch>
        <div>
          <footer className="footer">
            <div className="container has-text-centered">
              <p>
                <strong>FGxBIO</strong> Senior Project 2018 by Wasin
                Panitansirikul
              </p>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default App
