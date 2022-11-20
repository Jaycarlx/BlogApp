import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from "./components/Create"


function App() {

  return (
    <Router> 
        <Navbar />
      <Switch>
        <Route exact path= '/' >
          < Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
      )
}

export default App
