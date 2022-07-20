import React from "react";
import './Card.css';
import CardTitle from '../cardTitle/CardTitle'
import CardImage from '../cardImage/CardImage'
import CardInfo from '../cardInfo/CardInfo'

const Card = ({title, image, info, onClick}) => {
    return (
        <div className="card" onClick={()=> onClick()}>
            <div className="card-body">
                <CardTitle title={title} />
                <CardImage url={image} />
                <CardInfo info={info}/>
            </div>
        </div>
    )
}

export default Card;