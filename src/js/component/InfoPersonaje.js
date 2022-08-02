import React from 'react'
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const InfoPersonaje = (props) => {
    let { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetailCharacter(params.id);
    }, [])
    return (
        <div className="container">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="fst-italic">{store.details.name}</h1>
                    <p className="lead my-3">Weight: {store.details.mass}</p>
                    <p className="lead my-3">Gender: {store.details.gender}</p>
                    <p className="lead my-3">Hair Color: {store.details.hair_color}</p>
                    <p className="lead my-3">Skin Color: {store.details.skin_color}</p>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}

export default InfoPersonaje;