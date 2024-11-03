import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TaskType } from '../App';
import TaskVisualizer from './TaskVisualizer';

interface TaskListProps {
  taskTypes: TaskType[];
}

function TaskList({ taskTypes }: TaskListProps) {
  const [expandedTasks, setExpandedTasks] = useState<string[]>([]);
  const [selectedSubtype, setSelectedSubtype] = useState<string | null>(null);

  const toggleTask = (taskId: string) => {
    setExpandedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Типы задач</h2>
      <div className="space-y-4">
        {taskTypes.map(task => (
          <div key={task.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleTask(task.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-indigo-600">{task.icon}</span>
                <span className="font-medium text-gray-900">{task.title}</span>
              </div>
              {expandedTasks.includes(task.id) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedTasks.includes(task.id) && (
              <div className="px-6 pb-4">
                <div className="grid gap-4 mt-4">
                  {task.subtypes.map(subtype => (
                    <div key={subtype.id}>
                      <button
                        onClick={() => setSelectedSubtype(subtype.id)}
                        className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                      >
                        <h3 className="font-medium text-gray-900">{subtype.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{subtype.description}</p>
                        {subtype.interactive && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                            Интерактивный режим
                          </span>
                        )}
                      </button>
                      
                      {selectedSubtype === subtype.id && (
                        <TaskVisualizer taskId={subtype.id} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;