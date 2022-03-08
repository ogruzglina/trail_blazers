import { Link } from "react-router-dom"
import { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Review from "./Review"

function ReviewPage() {
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const [userName, setUserName] = useState("")
    const [userImage, setUserImage] = useState("")
    const [userRating, setUserRating] = useState("")
    const [userComment, setUserComment] = useState("")


    function handleClose() {
        setShowModal(showModal => !showModal)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setUserName(e.target[0].value)
        setUserImage(e.target[1].value)
        setUserRating(e.target[2].value)
        setUserComment(e.target[3].value)

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
                    <Link to="/">Home</Link>
                    <Link to="/saved_trails">
                        Saved Trails
                    </Link>
                </Container>
            </Navbar>
            <div>
                <Card className="text-white" border="light">
                    <Card.Img style={{ height: "500px", paddingTop: "30px", paddingLeft: "200px", paddingRight: "200px" }} src="https://i.insider.com/5db07749045a31009a7b0b22?width=700" alt="trail-img" />
                    <Card.ImgOverlay style={{ textAlign: "center" }}>
                        <Card.Title style={{ fontSize: "30pt", fontWeight: "700" }}>Trail Name</Card.Title>
                        <Card.Text>
                            Trail stats go here
                        </Card.Text>
                        <Button variant="light" onClick={(e) => {
                            window.open("http://google.com", "_blank");
                        }} >
                            <MapOutlinedIcon /> Directions
                        </Button>
                        &nbsp;
                        <Button variant="light">
                            <BookmarkBorderOutlinedIcon />
                        </Button>
                    </Card.ImgOverlay>
                </Card>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", paddingTop: "20px", fontSize: "18px", textAlign: "center" }}>
                    Placeholder text
                    <hr />
                </div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", textAlign: "center" }}>
                    <div className="row align-items-start">
                        <div className="col">
                            Length
                            <div style={{ fontWeight: "700" }}>2.0 mi</div>
                        </div>
                        <div className="col">
                            Duration
                            <div style={{ fontWeight: "700" }}>2hr 30min</div>
                        </div>
                        <div className="col">
                            Trail Type
                            <div style={{ fontWeight: "700" }}>Loop</div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", paddingTop: "20px" }}>
                    <Navbar style={{ backgroundColor: "lightgray" }}>
                        <Container>
                            <Navbar.Brand>
                                <b>Reviews (312)</b>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>
                <div style={{ paddingRight: "15px", paddingLeft: "225px", paddingTop: "20px" }}>
                    <div className="row align-items-start">
                        <div className="col">
                            <div>
                                5 stars
                            </div>
                            <div>
                                4 stars
                            </div>
                            <div>
                                3 stars
                            </div>
                            <div>
                                2 stars
                            </div>
                            <div>
                                1 stars
                            </div>
                            <br />
                            <div>
                                Sort by: <select>
                                    <option>Default</option>
                                    <option>Newest First</option>
                                    <option>Oldest First</option>
                                    <option>Highest Rated</option>
                                    <option>Lowest Rated</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            Average of all reviews
                        </div>
                        <div className="col">
                            <Button style={{ backgroundColor: "seagreen", borderColor: "seagreen" }} onClick={() => setShowModal(true)}>Write a review</Button>
                            <Modal
                                size="md"
                                centered
                                show={showModal}
                                onHide={handleClose}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        <b>Add a review</b>
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
                                            <Form.Control as="textarea" placeholder="Enter comments" onChange={() => setComment(comment)} required />
                                        </Form.Group>
                                        <div style={{ float: "right" }}>
                                            <Button style={{ backgroundColor: "seagreen", borderColor: "seagreen" }} type="submit">
                                                Submit
                                            </Button>
                                            &nbsp;
                                            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", paddingTop: "20px" }}><hr /></div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px" }}>
                    <Review userName={userName} userImage={userImage} userRating={userRating} userComment={userComment} />
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default ReviewPage