import React from 'react'
import { Link } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/react/about">react About</Link>
                </li>
                <li>
                    <Link to="/angular/about">angular About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Layout