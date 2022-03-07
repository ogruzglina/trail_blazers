import react from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./Home"

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
export default App;
