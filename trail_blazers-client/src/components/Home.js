import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBar"
import Tile from "./Tile"
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react"

function Home() {

    const [trailData, setTrailData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let request = await fetch("http://localhost:9292/trails")
            let response = await request.json()
            setTrailData(response)
            return response
        }
        fetchData()
    }, [])

    // const tiles = trailData.map(trail => {
    //     return <Tile key={trail.id} trailData={trail} />
    // })

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Link to="/saved_trails">
                        Saved Trails
                    </Link>
                    <b>Trail Blazers</b>
                </Container>
            </Navbar>
            <div style={{ textAlign: "center", height: "550px" }}>
                <h1 className="searchbar-heading">Logo Here</h1>
                <SearchBar />
                <div className="carousel">
                    <Carousel infiniteLoop={true} autoPlay={true} interval="10000" showArrows={false} showStatus={false} showThumbs={false}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="image1" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="image2" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="image3" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div>
                <Tile />
            </div>
        </div>
    )
}

export default Home 