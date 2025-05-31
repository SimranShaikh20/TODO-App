import React, { useState } from 'react';
import { CheckCircle2, Edit3, Save, X, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: todo.name,
    description: todo.description,
    completed: todo.completed
  });
  const [isLoading, setIsLoading] = useState(false);

  const toggleComplete = async () => {
    setIsLoading(true);
    try {
      await fetch(`http://localhost:8000/todos/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...todo, completed: !todo.completed })
      });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async () => {
    setIsLoading(true);
    try {
      await fetch(`http://localhost:8000/todos/${todo.id}`, {
        method: 'DELETE'
      });
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveEdit = async () => {
    if (!editForm.name.trim() || !editForm.description.trim()) return;
    
    setIsLoading(true);
    try {
      await fetch(`http://localhost:8000/todos/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...todo, ...editForm })
      });
      setIsEditing(false);
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelEdit = () => {
    setEditForm({
      name: todo.name,
      description: todo.description,
      completed: todo.completed
    });
    setIsEditing(false);
  };

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 transform hover:scale-[1.02] ${
      todo.completed 
        ? 'border-green-400 bg-gradient-to-r from-green-50 to-white' 
        : 'border-blue-400 bg-gradient-to-r from-blue-50 to-white'
    }`}>
      <div className="flex items-start gap-4">
        <button
          onClick={toggleComplete}
          disabled={isLoading}
          className={`flex-shrink-0 w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-200 mt-1 ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white shadow-lg'
              : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
          }`}
        >
          {todo.completed && <CheckCircle2 size={18} />}
        </button>

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-semibold"
                placeholder="Task name..."
              />
              <textarea
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
                rows="2"
                placeholder="Description..."
              />
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editForm.completed}
                  onChange={(e) => setEditForm({ ...editForm, completed: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-600">Mark as completed</span>
              </label>
            </div>
          ) : (
            <div className="space-y-2">
              <h3 className={`text-xl font-bold ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}>
                {todo.name}
              </h3>
              <p className={`text-gray-600 leading-relaxed ${
                todo.completed ? 'line-through opacity-75' : ''
              }`}>
                {todo.description}
              </p>
              <div className="flex items-center gap-4 mt-3">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  todo.completed 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {todo.completed ? '✅ Completed' : '⏳ In Progress'}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-2 flex-shrink-0">
          {isEditing ? (
            <>
              <button
                onClick={saveEdit}
                disabled={isLoading || !editForm.name.trim() || !editForm.description.trim()}
                className="p-2 text-green-600 hover:bg-green-100 rounded-xl transition-colors duration-200 disabled:opacity-50"
                title="Save changes"
              >
                <Save size={18} />
              </button>
              <button
                onClick={cancelEdit}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                title="Cancel editing"
              >
                <X size={18} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors duration-200"
                title="Edit task"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={deleteTodo}
                disabled={isLoading}
                className="p-2 text-red-600 hover:bg-red-100 rounded-xl transition-colors duration-200 disabled:opacity-50"
                title="Delete task"
              >
                <Trash2 size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;