import React from "react";

function Card({ entry }) {
    return <div className="card">
        {/* <img src={entry.image} alt="img" /> */}
        <div className="centered">
            <h3>{entry.name}</h3>
            <h4>{entry.title}</h4>
        </div>
        <hr style={{ margin: 0, width: '100%' }} />

        <div className="leftAligned">
            <h5>Date of Birth : {entry.date}</h5>
            <h5>email : {entry.email}</h5>
            <h5>address : {entry.address}</h5>
            <h5>Phone number : {entry.number}</h5>
        </div>

    </div>
}

export default Card;