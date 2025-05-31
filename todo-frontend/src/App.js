import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const res = await fetch('http://localhost:8000/todos');
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <CheckCircle2 className="text-white" size={32} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Todo Master
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Organize your tasks with style and efficiency</p>
        </div>

        <TodoForm fetchTodos={fetchTodos} />
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </div>
    </div>
  );
}

export default App;