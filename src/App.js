import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './pages/Trending/Trending';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import Search from './pages/search/Search';


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route path="/movies" component={Movies}  />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
