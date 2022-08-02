import { useEffect, useContext } from "react";
import React from 'react';
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const InfoPlaneta = (props) => {
    let { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetailPlanet(params.id);
    }, [])
    return (
        <div className="container">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="fst-italic">{store.details.name}</h1>
                    <p className="lead my-3">Population: {store.details.population}</p>
                    <p className="lead my-3">Orbital time: {store.details.orbital_period}</p>
                    <p className="lead my-3">Weather: {store.details.climate}</p>
                    <p className="lead my-3">Surface: {store.details.terrain}</p>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}

export default InfoPlaneta;