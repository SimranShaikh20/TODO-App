import React, { useState } from 'react';
import { Plus, User, FileText, CheckCircle2 } from 'lucide-react';

const TodoForm = ({ fetchTodos }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    completed: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.description.trim()) return;
    
    setIsLoading(true);
    try {
      await fetch('http://localhost:8000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      setForm({ name: '', description: '', completed: false });
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
          <Plus className="text-white" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Add New Task</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <User size={16} />
              Task Name
            </label>
            <input
              type="text"
              placeholder="Enter task name..."
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800"
            />
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FileText size={16} />
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={form.completed}
                onChange={(e) => setForm({ ...form, completed: e.target.checked })}
                className="sr-only"
              />
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                form.completed 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-gray-300 hover:border-green-400'
              }`}>
                {form.completed && <CheckCircle2 className="text-white" size={16} />}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">Mark as completed</span>
          </label>

          <button
            type="submit"
            disabled={isLoading || !form.name.trim() || !form.description.trim()}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Plus size={20} />
            {isLoading ? 'Adding...' : 'Add Task'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;