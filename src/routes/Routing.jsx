import { Navigate, Route, Routes } from 'react-router-dom'
import Master from '../component/Layout/Master'
import Home from '../pages/Home'
import SavedNews from '../pages/SavedNews'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Master />}>
                <Route index element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/saved-news" element={<SavedNews />} />
            </Route>
        </Routes>
    )
}

export default Routing