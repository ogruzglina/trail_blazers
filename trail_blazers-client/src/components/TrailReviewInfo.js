import Modal from "react-bootstrap/Modal"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { useState } from "react"

function TrailReviewInfo({ id, selectedTrailRating, handleHiker, handlePost, allHikers, sort, setSort }) {
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")

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
        </div>
    )
}

export default TrailReviewInfo