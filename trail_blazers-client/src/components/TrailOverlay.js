import Card from "react-bootstrap/Card"
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Button from "react-bootstrap/Button"

function TrailOverlay({ selectedTrail, selectedTrailRating, difficulty }) {

    let difficultyColor
    if (difficulty === "Easy") {
        difficultyColor = "seagreen"
    } else if (difficulty === "Moderate") {
        difficultyColor = "#f1c232"
    } else {
        difficultyColor = "#da1b1b"
    }
    
    return (
        <Card className="text-white" border="light">
            <Card.Img style={{ height: "500px", paddingLeft: "200px", paddingRight: "200px" }} src={selectedTrail.trail_picture} alt="trail-img" />
            <Card.ImgOverlay style={{ height: "200px", transform: "translate(16%, 145%" }}>
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
    )
}

export default TrailOverlay