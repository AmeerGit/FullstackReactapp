import { Fragment } from "react";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <Fragment>
      <Router>
      <HeaderComponent />
      <div className="container">
        <Switch>
          <Route path="/" exact component={ListEmployeeComponent}></Route>
          <Route path="/employees" component={ListEmployeeComponent}></Route>
          <Route  path="/add-employee" component={AddEmployee} />
        </Switch>
        
      </div>
      <FooterComponent />
      </Router>
      
    </Fragment>
  );
}

export default App;
