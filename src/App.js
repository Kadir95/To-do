import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import { todos } from "./todos";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos, // prayan array koji se treba puniti fetchovima
      done: false, // done se koristi kako bi se oznacio todo kao uradjen ili neuradjen
      newTodo: '', // ovaj state key se koristi pri kreiranju novih to-do-ova preko input metoda
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users') //  fetchamo sa int
  //     .then(rsp => rsp.json())
  //     .then(data => {
  //       this.setState({ todos: data }); // punimo todos array sa ovim fetchovima
  //     })
  // }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  }

  handleSubmitChange = (e) => {
    e.preventDefault();
    const newTodoObj = {
      name: this.state.newTodo,
      id: this.state.todos.length + 1,
      done: this.state.done,
    }
    if (newTodoObj.name.length > 0) {
      const updatedTodos = [...this.state.todos, newTodoObj];
      this.setState({ todos: updatedTodos, newTodo: '' });
    }
    console.log(this.state.newTodo);
  }


  handleResetButton = () => {
    this.setState({ newTodo: '' });
  }

  handleDoneChange = () => {
    if (this.state.done === false) {
      this.setState({ done: true });
      alert("Its true now");
    }
    else if (this.state.done === true) {
      this.setState({ done: false });
      alert("Its false now");
    }
  }

  render() {
    return (
      <div className=" bg-cyan-200">
        <TodoInput inputChange={this.handleInputChange} submitChange={this.handleSubmitChange} value={this.state.newTodo} handleResetButton={this.handleResetButton} />
        <TodoItem doneChange={this.handleDoneChange} completed={this.state.done} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }

}

export default App;