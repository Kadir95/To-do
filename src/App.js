import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
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
  }

  handleDeleteChange = (id) => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: filteredTodos });
  }


  handleResetButton = () => {
    this.setState({ newTodo: '' });
  }

  handleDoneChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed // toggle the completed property
          };
        }
        return todo;
      })
    }));
  };

  render() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-800">
        <div className=" bg-indigo-400 rounded-lg shadow-md p-6">
          <TodoInput inputChange={this.handleInputChange}
            submitChange={this.handleSubmitChange}
            value={this.state.newTodo}
            handleResetButton={this.handleResetButton} />
          <TodoList todos={this.state.todos}
            doneChange={this.handleDoneChange}
            deleteChange={this.handleDeleteChange}
          />
        </div>
      </div>
    )
  }

}

export default App;