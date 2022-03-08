function Review({ userName, userImage, userRating, userComment }) {
    console.log(userName, userImage, userRating, userComment)
    return (
        <div>
            <div>
                <img src={userImage} alt="user-img" style={{ height: "48px", width: "48px", borderRadius: "50px" }} />
                
                <span style={{paddingLeft: "20px"}}>
                    {userName}
                    {userRating}
                </span>
            </div>
            <div>
                {userComment}
            </div>
        </div>
    )
}

export default Review