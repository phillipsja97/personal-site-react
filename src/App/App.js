/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
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
    return (
    <div className="App">
        <Router>
              <NavBar />
                <Switch>
                  <Route path="/" exact component={About} />
                  <Route path="/technologies" render={(props) => (<Technologies {...props} technologies={this.state.technologies}/>)}/>
                  <Route path="/projects" render={(props) => (<Projects {...props} projects={this.state.projects}/>)}/>
                  <Route path="/contact" exact component={Contact} />
                </Switch>
              <Footer />
        </Router>
    </div>
    );
  }
}

export default App;
