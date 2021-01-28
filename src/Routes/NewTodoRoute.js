import React, { Component } from 'react'
import AddTodoForm from '../Components/AddTodoForm/AddToDoForm'


class NewTodoRoute extends Component {
    render() {
        return (
            <section>
                <AddTodoForm />
            </section>
        );
    };
};

export default NewTodoRoute;