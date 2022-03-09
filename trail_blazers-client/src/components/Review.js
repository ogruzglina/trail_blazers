function Review({ userName, userImage, userRating, userComment, created_at }) {
    return (
        <div>
            <div>
                <img src={userImage ? userImage : "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="} alt="user-img" style={{ height: "48px", width: "48px", borderRadius: "50px", border: "1px solid black" }} />
                <div className="row">
                    <span style={{ paddingLeft: "20px" }}>
                        <b>{userName}</b>
                    </span>
                </div>
                <div className="row">
                    <span style={{ paddingLeft: "20px" }}>
                        <span style={{ color: "#f5d24b" }}>{"★".repeat(userRating)}</span>
                        <span style={{ paddingLeft: "5px" }}>{created_at}</span>
                    </span>
                </div>
            </div>
            <div style={{ paddingLeft: "10px" }}>
                {userComment}
            </div>
            <hr />
        </div >
    )
}

export default Review