import React, { useContext } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { AuthContext } from '../auth/AuthContext';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";


export const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    
                    <PublicRouter
                        exact path="/login"
                        component={LoginScreen}
                        isAuthenticated={user.logget}
                    />

                    <PrivateRouter 
                    path="/" 
                    component={DashboardRouter} 
                    isAuthenticated={ user.logget }
                    />
                </Switch>
            </div>
        </Router>
    )
}
