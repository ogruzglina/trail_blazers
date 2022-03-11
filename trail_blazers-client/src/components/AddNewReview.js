import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useState, useEffect } from "react"

function AddNewReview({ id, handlePost }) {
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const [numberOfHikers, setNumberOfHikers] = useState([])

    useEffect(async () => {
        async function fetchData() {
          let request = await fetch("http://localhost:9292/hikers")
          let response = await request.json()
          setNumberOfHikers(response)
          return response
        }
        await fetchData()
      }, [name])

    function handleClose() {
        setShowModal(showModal => !showModal)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                rating: e.target[2].value,
                comment: e.target[3].value,
                hiker_id: numberOfHikers + 1,
                trail_id: id
            })
        })
            .then(res => res.json())
            .then(data => handlePost(data))

        fetch(`http://localhost:9292/hikers`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: e.target[0].value,
                picture: e.target[1].value
            })
        })
            .then(res => res.json())

        setName("")
        setImage("")
        setRating("")
        setComment("")

        handleClose()
    }

    return (
        <div className="col" style={{ paddingTop: "50px" }}>
            <Button className="shadow-none" 
                style={{ backgroundColor: "seagreen", borderColor: "seagreen" }} 
                onClick={() => setShowModal(true)}
            >Write a review</Button>
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
    )
}

export default AddNewReview