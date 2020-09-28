import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext);

    const path = localStorage.getItem('path') || '/';

    const handleIngresar = () => {
        
        dispatch({
            type: types.login,
            payload: { name: 'David Sanchez Motran'}
        })
        
        history.replace(path);
    }
    
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr></hr>

            <button
                className="btn btn-outline-primary"
                onClick={handleIngresar}
            >
               Ingresar     
            </button>
        </div>
    )
}
