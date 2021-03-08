import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/home/Home'
import Single from './components/singleCountry/Single'
import './app.css';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/country/:id">
              <Single />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
