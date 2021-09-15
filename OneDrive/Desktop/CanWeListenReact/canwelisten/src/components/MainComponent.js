import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MapPage from './MapComponent';

class Main extends Component {
  constructor(props) {
    this.state = {
      accounts: ACCOUNTS,
    };
  }
  render () {
    const HomePage = () => {
      return (
        <Home accounts={this.state.accounts.filter(accounts => accounts.featured)[0]} 
        />
      );
    }
    return (
      <div>
        <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/directory' render={() => <Directory accounts={this.state.accounts} />} />
            <Route path='/map' component={MapPage} />
          </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;