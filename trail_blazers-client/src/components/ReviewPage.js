import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Review() {
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
                    <Card.ImgOverlay style={{ transform: 'translate(15%, 65%' }}>
                        <Card.Title style={{ fontSize: "30pt", fontWeight: "700" }}>Trail Name</Card.Title>
                        <Card.Text>
                            Trail stats go here
                        </Card.Text>
                        <Button variant="light" onClick={(e) => {
                            window.open("http://google.com", "_blank");
                        }} >
                            <MapOutlinedIcon /> Directions
                        </Button>
                        :&nbsp;
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
                    <div class="row align-items-start">
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
                            <Button>Write a review</Button>
                        </div>
                    </div>
                </div>
                <div style={{ paddingRight: "200px", paddingLeft: "200px", paddingTop: "20px" }}><hr /></div>
            </div>
        </div>
    )
}

export default Review