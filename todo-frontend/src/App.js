import React, { useEffect, useState } from 'react';
import { CheckCircle2, Clock, ListTodo, BarChart3 } from 'lucide-react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const res = await fetch('https://taskify-4cvi.onrender.com/todos'); // ✅ updated URL
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

  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const successRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

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
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <CheckCircle2 className="text-white" size={32} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Taskify
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Your intelligent productivity companion</p>
        </div>

        {/* Task Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<ListTodo size={24} />} label="Total Tasks" value={totalTasks} color="blue" />
          <StatCard icon={<Clock size={24} />} label="Pending" value={pendingTasks} color="orange" />
          <StatCard icon={<CheckCircle2 size={24} />} label="Completed" value={completedTasks} color="green" />
          <StatCard icon={<BarChart3 size={24} />} label="Success Rate" value={`${successRate}%`} color="purple" />
        </div>

        {/* Create New Task */}
        <div className="mb-8">
          <TodoForm fetchTodos={fetchTodos} />
        </div>

        {/* Todo List */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">In Progress</h2>
          <TodoList todos={todos} fetchTodos={fetchTodos} />
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component for Stats
function StatCard({ icon, label, value, color }) {
  const bgColor = {
    blue: 'bg-blue-100 text-blue-600',
    orange: 'bg-orange-100 text-orange-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
  }[color];

  return (
    <div className={`rounded-xl p-4 shadow-md ${bgColor}`}>
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-lg shadow-sm">{icon}</div>
        <div>
          <p className="text-sm">{label}</p>
          <p className="text-lg font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
