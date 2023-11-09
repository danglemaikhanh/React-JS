import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem("");
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed } : todo;
      });
    });
  };

  const deletedTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <form className="mt-10" onSubmit={handleSubmit}>
        <label
          htmlFor="todo"
          className="mb-2 text-sm font-medium text-gray-700 sr-only"
        >
          Enter your Task
        </label>
        <div className="relative block h-15 w-full min-w-[250px] max-w-[800px] mx-auto">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            id="todo"
            className="block mx-auto w-full rounded-[15px] p-4 text-md text-gray-900 border font-playpenSans
              border-gray-300 bg-gray-50 focus:border-gray-800 focus:ring-0 focus:outline-none"
            placeholder="Enter your Task"
            required
          />
          <button className="absolute bottom-[.7rem] right-4 cursor-pointer border-[2px] rounded-md hover:border-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-gray-600 hover:text-gray-800"
            >
              <path d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </form>
      <div className="container bg-slate-200 mt-5 max-w-[800px] w-full rounded-md block mx-auto font-playpenSans">
        <h1 className="text-2xl text-gray-600 font-[600] uppercase p-5">
          Todo-List
        </h1>
        <ul className="divide-y divide-gray-300 p-6">
          {todos.map((todo) => {
            return (
              <li
                className="bg-slate-50 text-lg h-14 rounded-lg w-full mb-3 flex justify-between items-center px-4"
                key={todo.id}
              >
                <label>
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer text-red-600"
                  onClick={() => deletedTodo(todo.id)}
                >
                  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
