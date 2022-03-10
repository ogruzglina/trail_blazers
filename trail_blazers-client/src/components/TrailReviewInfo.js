import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import AddNewReview from "./AddNewReview"

function TrailReviewInfo({ id, handlePost, allHikers, selectedTrailRating, sort, setSort }) {
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
                            <b>Sort by:</b>
                            <select style={{ outline: "none", borderStyle: "none", textAlign: "center", color: "#428a13" }} name="correctIndex" value={sort} onChange={e => setSort(e.target.value)}>
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
                    <AddNewReview
                        id={id}
                        handlePost={handlePost}
                        allHikers={allHikers}
                    />
                </div>
            </div>
        </div>
    )
}

export default TrailReviewInfo