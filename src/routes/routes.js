import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import Services from '../pages/Home/Shared/Services'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import ServicesDetails from '../pages/Shared/ServicesDetails'





export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>NOT FOUND</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: `/services/:id`,
                element: <ServicesDetails></ServicesDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])