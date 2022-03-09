import { Route, Switch } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./Home"
import ReviewPage from "./ReviewPage"
import SavedTrails from "./SavedTrails"

function App() {
  const [trailData, setTrailData] = useState([])

  useEffect(async () => {
    async function fetchData() {
      let request = await fetch("http://localhost:9292/trails")
      let response = await request.json()
      setTrailData(response)
      return response
    }
    await fetchData()
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <Home trailData={trailData} />
      </Route>
      <Route path="/review/:id">
        <ReviewPage trailData={trailData} />
      </Route>
      <Route path="/saved_trails">
        <SavedTrails />
      </Route>
    </Switch>
  )
}
export default App;
