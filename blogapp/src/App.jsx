import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from "./components/Create"
import BlogDetails from "./components/BlogDetails"
import NotFound from "./NotFound"


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
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path = '*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
      )
}

export default App
