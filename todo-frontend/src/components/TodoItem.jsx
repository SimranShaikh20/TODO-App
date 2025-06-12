import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Edit3, Save, X, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...todo });
  const [isLoading, setIsLoading] = useState(false);
  const nameInputRef = useRef(null);

  // Focus input when editing begins
  useEffect(() => {
    if (isEditing && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isEditing]);

  const toggleComplete = async () => {
    setIsLoading(true);
    try {
      await fetch(`http://localhost:8000/todos/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...todo, completed: !todo.completed }),
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
        method: 'DELETE',
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
        body: JSON.stringify(editForm),
      });
      setIsEditing(false);
      fetchTodos();
    } catch (error) {
      console.error('Error saving edit:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelEdit = () => {
    setEditForm({ ...todo });
    setIsEditing(false);
  };

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 border-l-4 ${
      todo.completed ? 'border-green-400 bg-green-50' : 'border-blue-400 bg-blue-50'
    }`}>
      <div className="flex items-start gap-4">
        <button
          onClick={toggleComplete}
          disabled={isLoading}
          className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center mt-1 ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
          }`}
        >
          {todo.completed && <CheckCircle2 size={18} />}
        </button>

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-3">
              <input
                ref={nameInputRef}
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none font-semibold"
                placeholder="Task name"
              />
              <textarea
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                placeholder="Task description"
              />
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={editForm.completed}
                  onChange={(e) => setEditForm({ ...editForm, completed: e.target.checked })}
                />
                Mark as completed
              </label>
            </div>
          ) : (
            <div className="space-y-2">
              <h3 className={`text-xl font-bold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {todo.name}
              </h3>
              <p className={`text-gray-600 ${todo.completed ? 'line-through opacity-75' : ''}`}>
                {todo.description}
              </p>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                todo.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {todo.completed ? '✅ Completed' : '⏳ In Progress'}
              </span>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={saveEdit}
                disabled={isLoading}
                className="text-green-600 hover:bg-green-100 p-2 rounded-xl disabled:opacity-50"
                title="Save"
              >
                <Save size={18} />
              </button>
              <button
                onClick={cancelEdit}
                className="text-gray-600 hover:bg-gray-100 p-2 rounded-xl"
                title="Cancel"
              >
                <X size={18} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-600 hover:bg-blue-100 p-2 rounded-xl"
                title="Edit"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={deleteTodo}
                disabled={isLoading}
                className="text-red-600 hover:bg-red-100 p-2 rounded-xl disabled:opacity-50"
                title="Delete"
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
