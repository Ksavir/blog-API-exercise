import { useEffect, useContext } from "react";
import React from 'react';
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const InfoVehiculo = (props) => {
    let { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetailVehicles(params.id);
    }, [])
    return (
        <div className="container">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="fst-italic">{store.details.name}</h1>
                    <p className="lead my-3">Brand: {store.details.manufacturer}</p>
                    <p className="lead my-3">Price(credits): {store.details.cost_in_credits}</p>
                    <p className="lead my-3">Vehicle Style: {store.details.vehicle_class}</p>
                    <p className="lead my-3">Passengers: {store.details.passengers}</p>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}

export default InfoVehiculo;