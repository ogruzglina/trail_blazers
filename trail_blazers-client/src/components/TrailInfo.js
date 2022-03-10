function TrailInfo({ selectedTrail, difficulty }) {

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

    let attraction
    if (selectedTrail.attraction === "Wildflowers" || selectedTrail.attraction === "Wild Animals" || selectedTrail.attraction === "Cliffs") {
        attraction = `has ${selectedTrail.attraction.toLowerCase()} and`
    } else if (selectedTrail.attraction === null) {
        attraction = ""
    } else {
        attraction = `has a ${selectedTrail.attraction.toLowerCase()} and`
    }

     let difficultyText
    if (difficulty === "Easy") {
        difficultyText = "good for all skill levels"
    } else if (difficulty === "Moderate") {
        difficultyText = "rated as moderate"
    } else {
        difficultyText = "rated as difficult"
    }

    return (
        <div>
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
        </div>
    )

}

export default TrailInfo