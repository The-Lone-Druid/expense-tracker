import { Link } from 'react-router-dom';
import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark-blue shadow">
            <div className="container justify-content-center">
                <Link to="/" className="navbar-brand fs-4 fw-bold">Expense Tracker</Link>
            </div>
        </nav>
    )
}

export default Header
