import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import ReviewPage from "./ReviewPage"
import SavedTrails from "./SavedTrails"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/review">
        <ReviewPage />
      </Route>
      <Route path="/saved_trails">
        <SavedTrails />
      </Route>
    </Switch>
  )
}
export default App;
