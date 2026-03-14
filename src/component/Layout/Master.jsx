import { Outlet } from 'react-router-dom'
import Header from './Header'

const Master = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Master