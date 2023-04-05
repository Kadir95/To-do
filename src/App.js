import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { todoArray } from "./todos";


function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     todos: todos, // prayan array koji se treba puniti fetchovima
  //     done: false, // done se koristi kako bi se oznacio todo kao uradjen ili neuradjen
  //     newTodo: '', // ovaj state key se koristi pri kreiranju novih to-do-ova preko input metoda
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users') //  fetchamo sa int
  //     .then(rsp => rsp.json())
  //     .then(data => {
  //       this.setState({ todos: data }); // punimo todos array sa ovim fetchovima
  //     })
  // }

  const [todos, setTodos] = useState(todoArray);
  const [newTodo, setNewTodo] = useState('');



  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleSubmitChange = (e) => {
    e.preventDefault();
    const newTodoObj = { // kreiraj novi todo objekat
      name: newTodo,
      id: todos.length + 1,
    }
    if (newTodoObj.name.length > 0) {
      const updatedTodos = [...todos, newTodoObj]; // updatedTodos je array koji sadrzi : kopiju starog todos arraya i novi todo obj
      setTodos(updatedTodos);
      setNewTodo('');
    }
  }

  const handleDeleteChange = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id); // ako je id nekog todoa u arrayu razlicit od onog koji je kliknut, izbrisi ga
    setTodos(filteredTodos);
  }


  const handleResetButton = () => {
    setNewTodo('');
  }

  const handleDoneChange = (id) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) { // ako je id nekog to-doa u arrayu isti sa id-em todoa koji je kliknut
          return { // vraca novi arr koji je kopija starog todosa, ali mu je promijenjen completed
            ...todo,
            completed: !todo.completed // toggle the completed property
          };
        }
        return todo;
      });
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-800">
      <div className=" bg-indigo-400 rounded-lg shadow-md p-6">
        <TodoInput inputChange={handleInputChange}
          submitChange={handleSubmitChange}
          value={newTodo}
          handleResetButton={handleResetButton} />
        <TodoList todos={todos}
          doneChange={handleDoneChange}
          deleteChange={handleDeleteChange}
        />
      </div>
    </div>
  )
}


export default App;