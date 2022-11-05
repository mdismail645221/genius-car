import {createBrowserRouter} from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Order from '../pages/Order/Order';
import Register from '../pages/Register/Register';
import CheackOut from '../pages/Shared/CheackOut';
import PrivateRoute from './PrivateRoute';





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
                element: <PrivateRoute><CheackOut></CheackOut>,</PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/order',
                element: <PrivateRoute><Order></Order></PrivateRoute>
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