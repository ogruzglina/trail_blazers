import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"

function Review() {
    return (
        <div>
            <Navbar bg="dark">
                <Link to="/">Home</Link>
                <Link to="/saved_trails">
                    Saved Trails
                </Link>
            </Navbar>
        </div>
    )
}

export default Review