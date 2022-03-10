import { Route, Switch } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./Home"
import ReviewPage from "./ReviewPage"

function App() {
  const [trailData, setTrailData] = useState([])
  const [reviewData, setReviewData] = useState([])
  const [hikerData, setHikerData] = useState([])
  const [allHikers, setAllHikers] = useState([])
  const [selectedId, setSelectedId] = useState("")
  const [search, setSearch] = useState("");

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
    // relies on reviewData but infinitely fetches
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

  const trails = trailData.trails;
  const ratingData = trailData.rating;
  const filteredTrailsData = { trails: [], rating: [] }

  if (!trails) return null
  filteredTrailsData.trails = trails.filter(trail =>
    trail.park_name.toLowerCase().includes(search.toLowerCase()) || trail.trail_name.toLowerCase().includes(search.toLowerCase())
  );

  filteredTrailsData.rating = filteredTrailsData.trails.map(trail =>
    ratingData.filter(rating => rating.trail_id === trail.id)
  );

  function handlePost(newPost) {
    setReviewData([...reviewData, newPost])
  }

  function handleHiker(newHiker) {
    setHikerData([...allHikers, newHiker])
  }

  return (
    <Switch>
      <Route exact path="/">
        <Home trailData={filteredTrailsData} onSearch={setSearch} setSearch={setSearch} />
      </Route>
      <Route path="/review/:id">
        <ReviewPage trailData={trailData}
          reviewData={reviewData}
          setSelectedId={setSelectedId}
          handlePost={handlePost}
          allHikers={allHikers}
          handleHiker={handleHiker}
        />
      </Route>
    </Switch>
  )
}
export default App;
