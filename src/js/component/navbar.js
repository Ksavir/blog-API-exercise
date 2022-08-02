import React from 'react';
import {  useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logoSw from "../../img/logoSW.png";

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const deleteTask = (key) => {
        actions.removeFavorite(key);
    }
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-warning p-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img style={{width:"5rem"}}src={logoSw}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle btn btn-warning btn-outline-light" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Favoritos
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {(store.favoriteListing.length === 0) ? <li className="dropdown-item text-center">(empty)</li> :
                                        store.favoriteListing.map((item, index) => <li className="dropdown-item d-flex justify-content-between" key={index}>{item}<span className="ps-5"><button onClick={() => {
                                            deleteTask(index);
                                        }}>💥</button></span></li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
export default Navbar;