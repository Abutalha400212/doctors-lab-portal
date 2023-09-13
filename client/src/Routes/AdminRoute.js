import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,adminLoading] = useAdmin(user?.email)
    if(loading || adminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default AdminRoute;
