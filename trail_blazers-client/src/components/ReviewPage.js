import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "react-bootstrap/Navbar"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Review from "./Review"
import logo from "./logo.png"

function ReviewPage({ trailData, reviewData, hikerData, allHikers, setSelectedId, handlePost, handleHiker }) {
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const [sort, setSort] = useState('default');
    const [sortedReviewData, setSortedReviewData] = useState(reviewData);

    const { id } = useParams()
    setSelectedId(id)

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

    let locationSplit = selectedTrail.location.split(",")
    let location = (locationSplit[1] + "," + locationSplit[2].slice(0, 3))
    let hours = Math.floor(selectedTrail.duration / 60)
    let minutes = selectedTrail.duration % 60
    let duration
    if (minutes === 0) {
        duration = `${hours}h`
    } else if (hours === 0) {
        duration = `${minutes}m`
    } else {
        duration = `${hours}h ${minutes}m`
    }
    let difficulty = selectedTrail.difficulty
    let difficultyColor
    if (difficulty === "Easy") {
        difficultyColor = "seagreen"
    } else if (difficulty === "Moderate") {
        difficultyColor = "#f1c232"
    } else {
        difficultyColor = "#da1b1b"
    }

    let difficultyText
    if (difficulty === "Easy") {
        difficultyText = "good for all skill levels"
    } else if (difficulty === "Moderate") {
        difficultyText = "rated as moderate"
    } else {
        difficultyText = "rated as difficult"
    }

    let attraction
    if (selectedTrail.attraction === "Wildflowers" || selectedTrail.attraction === "Wild Animals" || selectedTrail.attraction === "Cliffs") {
        attraction = `has ${selectedTrail.attraction.toLowerCase()} and`
    } else if (selectedTrail.attraction === null) {
        attraction = ""
    } else {
        attraction = `has a ${selectedTrail.attraction.toLowerCase()} and`
    }

    const hikers = hikerData.hikers

    if (!hikers) return null
    const hikerArray = hikers.map(hiker => hiker)

    let data = [];
    if (sort === 'default') {
        data = reviewData;
    } else {
        if (!sortedReviewData) return null
        data = sortedReviewData
    }
    let reviews = data.map(review => {
        let dateSplit = review.created_at.split(/[-T]/)
        let created_at = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`
        return <Review key={review.id} userName={hikerArray.find(hiker => hiker.id === review.hiker_id).name} userImage={hikerArray.find(hiker => hiker.id === review.hiker_id).picture} userRating={review.rating} userComment={review.comment} created_at={created_at} />
    })

    function handleClose() {
        setShowModal(showModal => !showModal)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rating: e.target[2].value,
                comment: e.target[3].value,
                hiker_id: allHikers.length + 1,
                trail_id: id
            })
        })
            .then(res => res.json())
            .then(data => handlePost(data))

        fetch(`http://localhost:9292/hikers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target[0].value,
                picture: e.target[1].value
            })
        })
            .then(res => res.json())
            .then(data => handleHiker(data))

        setName("")
        setImage("")
        setRating("")
        setComment("")

        handleClose()
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
                <Card className="text-white" border="light">
                    <Card.Img style={{ height: "500px", paddingLeft: "200px", paddingRight: "200px" }} src={selectedTrail.trail_picture} alt="trail-img" />
                    <Card.ImgOverlay style={{ height: "200px", transform: "translate(15%, 140%" }}>
                        <Card.Title style={{ fontSize: "30pt", fontWeight: "700", textShadow: "4px 4px black" }}>{selectedTrail.trail_name}</Card.Title>
                        <div>
                            <span style={{ backgroundColor: difficultyColor, borderRadius: "30px", color: "white", padding: "3px 20px" }}>
                                {selectedTrail.difficulty}
                            </span>
                            &nbsp;&nbsp;
                            <span style={{ color: "#f5d24b", textShadow: "2px 2px black" }}>{"★".repeat(selectedTrailRating.avg_review)}</span>
                            &nbsp;
                            <span style={{ textShadow: "2px 2px black" }}>({selectedTrailRating.count})</span>
                        </div>
                        <div style={{ paddingTop: "5px", fontWeight: "700", textShadow: "2px 2px black" }}>
                            {selectedTrail.park_name}
                        </div>
                        <Button className="shadow-none" variant="light" onClick={(e) => {
                            window.open(`https://www.google.com/maps/search/${selectedTrail.location}`, "_blank");
                        }} >
                            <MapOutlinedIcon /> Directions
                        </Button>
                    </Card.ImgOverlay>
                </Card>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", paddingTop: "20px", fontSize: "18px", textAlign: "center" }}>
                    {`${selectedTrail.trail_name} is a ${selectedTrail.length} mile ${selectedTrail.trail_type.toLowerCase()} trail located near ${location} that ${attraction} is ${difficultyText}.`}
                    <hr />
                </div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", textAlign: "center" }}>
                    <div className="row align-items-start">
                        <div className="col">
                            Length
                            <div style={{ fontWeight: "700" }}>{selectedTrail.length} mi</div>
                        </div>
                        <div className="col">
                            Estimated Duration
                            <div style={{ fontWeight: "700" }}>{duration}</div>
                        </div>
                        <div className="col">
                            Trail Type
                            <div style={{ fontWeight: "700" }}>{selectedTrail.trail_type}</div>
                        </div>
                        <div className="col">
                            Attraction
                            <div style={{ fontWeight: "700" }}>{selectedTrail.attraction ? selectedTrail.attraction : "None"}</div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", paddingTop: "20px" }}>
                    <Navbar style={{ backgroundColor: "lightgray" }}>
                        <Container>
                            <Navbar.Brand>
                                <b>Reviews ({selectedTrailRating.count})</b>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>
                <div style={{ paddingRight: "15px", paddingLeft: "225px", paddingTop: "20px" }}>
                    <div className="row align-items-start">
                        <div className="col">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><b>5</b></td>
                                        <td style={{ color: "#f5d24b" }}>{"★".repeat(5)}</td>
                                        <td>{selectedTrailRating.count_stars[4]}</td>
                                    </tr>
                                    <tr>
                                        <td><b>4</b></td>
                                        <td style={{ color: "#f5d24b" }}>{"★".repeat(4)}</td>
                                        <td>{selectedTrailRating.count_stars[3]}</td>
                                    </tr>
                                    <tr>
                                        <td><b>3</b></td>
                                        <td style={{ color: "#f5d24b" }}>{"★".repeat(3)}</td>
                                        <td>{selectedTrailRating.count_stars[2]}</td>
                                    </tr>
                                    <tr>
                                        <td><b>2</b></td>
                                        <td style={{ color: "#f5d24b" }}>{"★".repeat(2)}</td>
                                        <td>{selectedTrailRating.count_stars[1]}</td>
                                    </tr>
                                    <tr>
                                        <td><b>1</b></td>
                                        <td style={{ color: "#f5d24b" }}>{"★".repeat(1)}</td>
                                        <td>{selectedTrailRating.count_stars[0]}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <div>
                                <b>Sort by:</b> <select style={{ outline: "none", borderStyle: "none", textAlign: "center", color: "#428a13" }} name="correctIndex" value={sort} onChange={e => setSort(e.target.value)}>
                                    <option value='default'>Default</option>
                                    <option value='newest'>Newest First</option>
                                    <option value='oldest'>Oldest First</option>
                                    <option value='highest'>Highest Rated</option>
                                    <option value='lowest'>Lowest Rated</option>
                                </select>
                            </div>
                        </div>
                        <div className="col" style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "46pt" }}>
                                {selectedTrailRating.avg_review.toFixed(1)}
                            </div>
                            <div>
                                <span style={{ color: "#f5d24b" }}>{"★".repeat(selectedTrailRating.avg_review)}</span>
                            </div>
                            <div>
                                {selectedTrailRating.count > 1 ? `${selectedTrailRating.count} Reviews` : `${selectedTrailRating.count} Review`}
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: "50px" }}>
                            <Button className="shadow-none" style={{ backgroundColor: "seagreen", borderColor: "seagreen" }} onClick={() => setShowModal(true)}>Write a review</Button>
                            <Modal
                                size="md"
                                centered
                                show={showModal}
                                onHide={handleClose}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        <b>Write a review</b>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control placeholder="Enter name" onChange={() => setName(name)} required />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Image</Form.Label>
                                            <Form.Control placeholder="Enter URL" onChange={() => setImage(image)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control type="number" min="1" max="5" placeholder="Enter rating (1-5)" onChange={() => setRating(rating)} required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Comments</Form.Label>
                                            <Form.Control as="textarea" placeholder="Enter comments" onChange={() => setComment(comment)} />
                                        </Form.Group>
                                        <br />
                                        <div style={{ float: "right" }}>
                                            <Button className="shadow-none" style={{ backgroundColor: "seagreen", borderColor: "seagreen" }} type="submit">
                                                Submit
                                            </Button>
                                            &nbsp;
                                            &nbsp;
                                            <Button className="shadow-none" variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", paddingTop: "20px" }}><hr /></div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px" }}>
                    {reviews}
                </div>
            </div>
        </div>
    )
}

export default ReviewPage