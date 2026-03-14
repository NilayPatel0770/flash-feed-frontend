import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SavedNews from '../pages/SavedNews'
import Main from '../component/Layout/Main'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Navigate to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="saved-news" element={<SavedNews />} />
            </Route>
        </Routes>
    )
}

export default Routing