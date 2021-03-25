import React from 'react';
import './App.css';
import {Navbar,Login} from './components';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import GlobalStyles from './index.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NewBill, NewInvoice,SettingsPage,Documents } from "./components";
import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './components/ProtectedRoute';

toast.configure();

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
              <Login />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/new-bill" component={NewBill} />
            <ProtectedRoute path="/new-invoice" component={NewInvoice} />
            <ProtectedRoute path="/documents" component={Documents} />
            <ProtectedRoute path="/settings" component={SettingsPage} />
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
