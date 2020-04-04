/* eslint-disable max-len */
import React from 'react';
import MediaQuery from 'react-responsive';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import HomePage from '../Components/Pages/HomePage/HomePage';
import About from '../Components/Pages/About/About';
import NavBar from '../Components/Shared/NavBar/NavBar';
import Technologies from '../Components/Pages/Technologies/Technologies';
import Projects from '../Components/Pages/Projects/Projects';
import Contact from '../Components/Pages/Contact/Contact';
import Footer from '../Components/Shared/Footer/Footer';
import techData from '../Helpers/data/techData';
import projectData from '../Helpers/data/projectData';
import firebaseConnection from '../Helpers/data/connectionData';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseConnection();

// const PublicRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

class App extends React.Component {
  state = {
    projects: [],
    technologies: [],
  }

  getProjects = () => {
    projectData.getProjects()
      .then((projects) => {
        this.setState({ projects });
      })
      .catch((errorFromProj) => console.error(errorFromProj));
  }

  getTechnologies = () => {
    techData.getTech()
      .then((technologies) => {
        this.setState({ technologies });
      })
      .catch((errorFromTech) => console.error(errorFromTech));
  }

  componentDidMount() {
    this.getProjects();
    this.getTechnologies();
  }

  render() {
    const { projects } = this.state;
    const { technologies } = this.state;
    return (
    <div className="App">
      {/* <MediaQuery minDeviceWidth={1224}>
        <NavBar />
        <HomePage />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </MediaQuery> */}
        <MediaQuery minDeviceWidth={1224}>
        <Router>
              <NavBar />
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/about" exact component={About} />
                  <Route path="/technologies" render={(props) => (<Technologies {...props} technologies={this.state.technologies}/>)}/>
                  <Route path="/projects" render={(props) => (<Projects {...props} projects={this.state.projects}/>)}/>
                  <Route path="/contact" exact component={Contact} />
              <Footer />
                </Switch>
        </Router>
      </MediaQuery>
      {/* <MediaQuery minDeviceWidth={768} maxDeviceWidth={1024}>
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
      </MediaQuery> */}
    </div>
    );
  }
}

export default App;
