import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [], // prayan array koji se treba puniti fetchovima
      done: false, // done se koristi kako bi se oznacio todo kao uradjen ili neuradjen
      newTodo: "", // ovaj state key se koristi pri kreiranju novih to-do-ova preko input metoda
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //  fetchamo sa int
      .then(rsp => rsp.json())
      .then(data => {
        this.setState({ todos: data }); // punimo todos array sa ovim fetchovima
      })
  }

  handleInputChange = (e) => {
    if (1 > 0) {
      this.setState({ newTodo: e.target.value });
      console.log(this.state.newTodo);
    }
  }

  handleSubmitChange = (e) => {
    e.preventDefault();
    const newTodos = {
      title: this.state.newTodo,
      id: this.state.todos.length + 1,
      done: false,
    }
    console.log(newTodos);
    if (newTodos.title.length > 0) {
      const updatedTodos = [...this.state.todos, newTodos];
      this.setState({ todos: updatedTodos, newTodo: "" }); // clear input field after adding new todo
    }
  }


  render() {
    return (
      <div className="">
        <TodoInput inputChange={this.handleInputChange} submitChange={this.handleSubmitChange} />
        <TodoItem />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }

}

export default App;