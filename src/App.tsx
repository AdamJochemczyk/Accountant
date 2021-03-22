import React from 'react';
import './App.css';
import {Navbar} from './components';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import GlobalStyles from './index.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NewBill, NewInvoice,SettingsPage } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <React.Suspense fallback={CircularProgress}>
          <Navbar
            items={[
              { content: "Home", to: "/" },
              { content: "Bills", to: "/new-bill" },
              { content: "Invoice", to: "/new-invoice" },
              { content: "Documents", to: "/documents" },
              { content: "Settings", to: "/settings" },
            ]}
          />
          <Switch>
            <Route exact path="/">
              <h2>In progress</h2>
            </Route>
            <Route path="/new-bill">
              <NewBill />
            </Route>
            <Route path="/new-invoice">
              <NewInvoice/>
            </Route>
            <Route path="/documents">Documents</Route>
            <Route path="/settings"><SettingsPage/></Route>
            <Route>
              <p>Not found</p>
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
