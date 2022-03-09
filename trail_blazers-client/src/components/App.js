import { Route, Switch } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./Home"
import ReviewPage from "./ReviewPage"
import SavedTrails from "./SavedTrails"

function App() {
  const [trailData, setTrailData] = useState([])
  const [reviewData, setReviewData] = useState([])
  const [hikerData, setHikerData] = useState([])
  const [allHikers, setAllHikers] = useState([])
  const [selectedId, setSelectedId] = useState("")

  useEffect(async () => {
    async function fetchData() {
      let request = await fetch("http://localhost:9292/trails")
      let response = await request.json()
      setTrailData(response)
      return response
    }
    await fetchData()
  }, [])

  useEffect(async () => {
    async function fetchData() {
      let request = await fetch("http://localhost:9292/hikers")
      let response = await request.json()
      setAllHikers(response)
      return response
    }
    await fetchData()
  }, [])

  useEffect(async () => {
    async function fetchData() {
      let request = await fetch(`http://localhost:9292/reviews/${selectedId}`)
      let response = await request.json()
      setReviewData(response)
      return response
    }
    await fetchData()
  }, [selectedId])

  useEffect(async () => {
    async function fetchData() {
      let request = await fetch(`http://localhost:9292/hikers/${selectedId}`)
      let response = await request.json()
      setHikerData(response)
      return response
    }
    await fetchData()
  }, [selectedId])

  function handlePost(newPost) {
    setReviewData([...reviewData, newPost])
  }

  function handleHiker(newHiker) {
    setHikerData([...allHikers, newHiker])
  }

  return (
    <Switch>
      <Route exact path="/">
        <Home trailData={trailData} />
      </Route>
      <Route path="/review/:id">
        <ReviewPage trailData={trailData}
          reviewData={reviewData}
          hikerData={hikerData}
          setSelectedId={setSelectedId}
          handlePost={handlePost}
          allHikers={allHikers}
          handleHiker={handleHiker}
        />
      </Route>
      <Route path="/saved_trails">
        <SavedTrails />
      </Route>
    </Switch>
  )
}
export default App;
