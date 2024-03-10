// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TodoModal from "./components/TodoModal";
import TodoCard from "./components/TodoCard";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openTodoModal = () => {
    setShowModal(true);
  };

  const closeTodoModal = () => {
    setShowModal(false);
  };

  const onAddTodo = (newTodo) => {
    if (newTodo.title.trim() == "" || newTodo.description.trim() == "") {
      return toast.error("Please Enter Something");
    }
    const newAddedTodo = { ...newTodo, id: todoId };
    setTodos([...todos, newAddedTodo]);
    setTodoId(todoId + 1);
    toast.success("Todo added successfully");
  };
  const onRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <div>
        <Navbar onOpen={openTodoModal} />
      </div>
      {showModal && (
        <TodoModal
          onClose={closeTodoModal}
          formData={formData}
          onChange={onChange}
          onAddTodo={onAddTodo}
          setFormData={setFormData}
        />
      )}

      <div className="flex flex-wrap justify-center px-6 gap-6">
        {todos.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
              onDelete={() => onRemoveTodo(todo.id)}
            />
          );
        })}
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
