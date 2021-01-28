import React, { Component } from 'react'
import TodosList from '../Components/TodosList/TodosList'


class CategoriesRoute extends Component {
  render() {
    return (
      <section>
        <TodosList />
      </section>
    );
  };
};

export default CategoriesRoute;