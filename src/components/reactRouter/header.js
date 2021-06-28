/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/home">HEADER</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/news">News</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/football">football</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/world">World</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/admin">Admin</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
