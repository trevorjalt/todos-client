import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import CategoriesRoute from '../../Routes/CategoriesRoute';
import NewTodoRoute from '../../Routes/NewTodoRoute';
import './App.css';

class App extends Component {
    renderRoutes() {
        return (
            <Switch>
                <Route
                    path={'/todos/:category'}
                    component={CategoriesRoute}
                />
                <Route
                    path={'/todos/new'}
                    component={NewTodoRoute}
                />
            </Switch>
        )
    }

    render() {
        return (
            <div>
                <main>
                    {this.renderRoutes()}
                </main>
            </div>
        )
    }
}

export default App;
