import React, { useContext }  from "react";
import { Context } from "../../store/appContext.js"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//Style
import "./card.css"

const Card = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card m-2 border border-3 border-warning bg-dark shadow d-flex flex-column justify-content-center" style={{width: "20rem", height: "25rem"}}>
            <img src={"https://starwars-visualguide.com/assets/img/"+props.type+"/"+props.id+".jpg"} className="card-img-top mt-2 rounded" alt="empty image" style={{'max-width': "364px", 'max-height': "364px", margin: "auto", 'object-fit': "contain"}}/>
            <div className="card-body">
                <h5 className="card-title text-warning">{props.name}</h5>
                <div className="d-flex flex-row justify-content-between">
                    <Link href="#" className="btn btn-outline-primary" to="/">Learn More!</Link>
                    <button href="#" className="btn btn-outline-warning container-icon" onClick={()=> actions.addFavorites(props.name)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button>
                </div> 
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string, 
    id: PropTypes.number
}


export default Card; 