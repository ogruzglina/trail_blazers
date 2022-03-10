import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Review from "./Review"
import logo from "./logo.png"
import TrailOverlay from "./TrailOverlay"
import TrailInfo from "./TrailInfo"
import TrailReviewInfo from "./TrailReviewInfo"

function ReviewPage({ trailData, allHikers, handleHiker, setHikerData }) {
    const [sort, setSort] = useState('default');
    const [sortedReviewData, setSortedReviewData] = useState([]);
    const { id } = useParams()

    useEffect(async () => {
        async function fetchData() {
            let request = await fetch(`http://localhost:9292/hikers/${id}`)
            let response = await request.json()
            setHikerData(response)
            return response
        }
        await fetchData()
    }, [id])

    useEffect(async () => {
        async function fetchData() {
            let request = await fetch(`http://localhost:9292/reviews/${id}/${sort}`)
            let response = await request.json()
            setSortedReviewData(response)
            return response
        }
        await fetchData()
    }, [sort])

    const trails = trailData.trails

    if (!trails) return null
    let trailArray = trails.map(trail => trail)
    let selectedTrail = trailArray[id - 1]
    let ratings = trailData.rating.map(rating => rating)
    let selectedTrailRating = ratings[id - 1]

    let difficulty = selectedTrail.difficulty

    if (!sortedReviewData) return null
    let reviews = sortedReviewData.map(review => {
        let dateSplit = review[0].created_at.split(/[-T]/)
        let created_at = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`
        return <Review
            key={review[0].id}
            userName={review[1].name}
            userImage={review[1].picture}
            userRating={review[0].rating}
            userComment={review[0].comment}
            created_at={created_at}
        />
    })

    function handlePost(newPost) {
        setSortedReviewData([...sortedReviewData, newPost])
    }

    return (
        <div>
            <Navbar>
                <Container>
                    <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "20px" }}><b>Home</b></Link>
                    <span style={{ paddingLeft: "39px" }}><img style={{ height: "100px" }} src={logo} alt="logo" /></span>
                    <b style={{ color: "white" }}>Saved Trails</b>
                </Container>
            </Navbar>
            <div>
                <TrailOverlay
                    selectedTrail={selectedTrail}
                    selectedTrailRating={selectedTrailRating}
                    difficulty={difficulty}
                />
                <TrailInfo
                    selectedTrail={selectedTrail}
                    difficulty={difficulty}
                />
                <TrailReviewInfo
                    id={id}
                    selectedTrailRating={selectedTrailRating}
                    handleHiker={handleHiker}
                    handlePost={handlePost}
                    allHikers={allHikers}
                    sort={sort}
                    setSort={setSort}
                />
                <div style={{ paddingRight: "200px", paddingLeft: "200px", paddingTop: "20px" }}><hr /></div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px" }}>
                    {reviews}
                </div>
            </div>
        </div>
    )
}

export default ReviewPage