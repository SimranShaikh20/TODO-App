import React from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, fetchTodos }) => {
  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="text-blue-500" size={48} />
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No tasks yet</h3>
        <p className="text-gray-500">Add your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {pendingTodos.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="text-orange-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Pending Tasks ({pendingTodos.length})
            </h2>
          </div>
          <div className="grid gap-4">
            {pendingTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle2 className="text-green-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Completed Tasks ({completedTodos.length})
            </h2>
          </div>
          <div className="grid gap-4">
            {completedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;