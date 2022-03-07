import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div>
            <Navbar bg="dark">
                <Link to="/saved_trails">
                    Saved Trails
                </Link>
            </Navbar>
            <Carousel >
                <div>
                    <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                </div>
            </Carousel>
        </div>
    )
}

export default Home 