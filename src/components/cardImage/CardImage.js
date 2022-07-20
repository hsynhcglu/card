import React from "react";
import './CardImage.css'

const CardImage = ({url}) => {
    return (
        <div className="card-image">
            <img src={url} />
        </div>
    )
}

export default CardImage;