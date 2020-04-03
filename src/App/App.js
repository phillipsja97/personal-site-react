import React from 'react';
import MediaQuery from 'react-responsive';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import HomePage from '../Components/Pages/HomePage/HomePage';
import NavBar from '../Components/Shared/NavBar/NavBar';
import Technologies from '../Components/Pages/Technologies/Technologies';
import Projects from '../Components/Pages/Projects/Projects';
import Contact from '../Components/Pages/Contact/Contact';
import Footer from '../Components/Shared/Footer/Footer';
import firebaseConnection from '../Helpers/data/connectionData';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

function App() {
  return (
    <div className="App">
      <MediaQuery minDeviceWidth={1224}>
        <NavBar />
        <HomePage />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </MediaQuery>
      <MediaQuery minDeviceWidth={768} maxDeviceWidth={1024}>
          <Router>
              <NavBar />
                <Switch>
                  <PublicRoute path="/" exact component={HomePage} />
                  <PublicRoute path="/technologies" exact component={Technologies} />
                  <PublicRoute path="/projects" exact component={Projects} />
                  <PublicRoute path="/contact" exact component={Contact} />
              <Footer />
                </Switch>
          </Router>
      </MediaQuery>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={767}>
      <Router>
              <NavBar />
                <Switch>
                  <PublicRoute path="/" exact component={HomePage} />
                  <PublicRoute path="/technologies" exact component={Technologies} />
                  <PublicRoute path="/projects" exact component={Projects} />
                  <PublicRoute path="/contact" exact component={Contact} />
              <Footer />
                </Switch>
          </Router>
      </MediaQuery>
    </div>
  );
}

export default App;
