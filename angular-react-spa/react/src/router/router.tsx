import React, { lazy } from 'react'
import { Routes, Route } from "react-router-dom"
import About from '../app/About/About'

const Router = (props) => {

    return (
        <Routes>
            <Route path='/react/about' element={<About />} />
        </Routes>
    )
}

export default Router