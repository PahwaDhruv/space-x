import React from 'react';
import routes from '../../routes';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = (props) => {
    return (
        <div>
            <Navbar></Navbar>
                <Switch>
                    {
                        routes.map((route) => (
                            <Route key={route.path} path = {route.path} exact = {route.exact} component = {route.component}></Route>
                        ))
                    }
                    <Route render={() => <h1>Error 404 - Page Not Found</h1>}></Route>
                </Switch>
            <Footer />
        </div>
    )
}

export default App;
