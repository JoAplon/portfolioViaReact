import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Project from './components/project';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Resume from './components/resume';
import Navigation from './components/nav';




function App() {

  return (
    <Router>
      <div className="App">
       <Header />
       <Switch>
       <Route path="/about" component={AboutMe} />
       <Route path="/project" component={Project} />
       <Route path="/contact" component={Contact} />
       <Route path="/resume" component={Resume} />
       </Switch>
       <Footer />
      </div>
    </Router>
  );
}

export default App
