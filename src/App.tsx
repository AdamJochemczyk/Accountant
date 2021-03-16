import React from 'react';
import './App.css';
import {Navbar} from './components';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar items={[
        {content: 'Home',to:'/'},
        {content: 'Bills',to:'/new-bill'},
        {content: 'Invoice',to:'/new-invoice'},
        {content: 'Prepayment Invoice',to:'/new-prepayment-invoice'},
        {content: 'Documents',to:'/documents'},
        {content: 'Settings',to:'/settings'},
      ]}/>
      <Switch>
        <Route exact path='/'>
          <h2>In progress</h2>
        </Route>
        <Route path='/new-bill'>
          Bills
        </Route>
        <Route path='/new-invoice'>
          Invoice
        </Route>
        <Route path='/new-prepayment-invoice'>
          Prepayment Invoice
        </Route>
        <Route path='/documents'>
          Documents
        </Route>
        <Route path='/settings'>
          Settings
        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
