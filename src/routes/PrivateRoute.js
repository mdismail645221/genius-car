import React, { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user, loading} = useContext(AuthContext)
    console.log(user)

    // spinner loading
    if(loading){
        return <div className='px-96 text-5xl'>Loading...</div>
    }

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;


};

export default PrivateRoute;