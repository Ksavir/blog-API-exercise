import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";


const Card = (props) => {
    const { store, actions } = useContext(Context);
    const addToList = () => {
        let nameFav = props.data.name;
        console.log(nameFav);
        actions.addFavorite(nameFav);
    }

    return (
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">
                    Weight: {props.data.mass}
                </p>
                <div className =" d-flex justify-content-between">
                    <Link to={`${`/detail/character/${props.data.url.match(/\d/g)}`}`} className="btn btn-warning">Learn More</Link>
                    <button onClick={() => addToList()}>💛</button>
                 </div>

            </div>
        </div>
    );
}

export default Card;

/**/