import React from 'react'
import { CheckCircle, XCircle, Edit2, Trash2 } from 'lucide-react'

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <ul className="space-y-4 mt-6">
      {tasks.map((task) => (
        <li key={task.id} className="bg-gray-50 p-4 rounded-md shadow-sm">
          <div className="flex items-center justify-between">
            <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => onUpdateTask(task.id, { completed: !task.completed })}
                className={`p-1 rounded-full ${
                  task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {task.completed ? <CheckCircle size={20} /> : <XCircle size={20} />}
              </button>
              <button
                onClick={() => {
                  const newTitle = prompt('Edit task', task.title)
                  if (newTitle) onUpdateTask(task.id, { title: newTitle })
                }}
                className="p-1 rounded-full bg-blue-100 text-blue-600"
              >
                <Edit2 size={20} />
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="p-1 rounded-full bg-red-100 text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
          {task.updatedAt && (
            <p className="text-xs text-gray-500 mt-1">
              Last updated: {task.updatedAt.toLocaleString()}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TaskList