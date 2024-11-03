import React from 'react';
import { Check, PlayCircle } from 'lucide-react';
import { TaskType } from '../App';

interface ExamBuilderProps {
  taskTypes: TaskType[];
  selectedTasks: string[];
  setSelectedTasks: (tasks: string[]) => void;
}

function ExamBuilder({ taskTypes, selectedTasks, setSelectedTasks }: ExamBuilderProps) {
  const toggleTask = (taskId: string) => {
    setSelectedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Составить вариант
      </h2>
      <p className="text-gray-600 mb-6">
        Выберите типы задач для вашего варианта экзамена
      </p>
      
      <div className="space-y-3">
        {taskTypes.map(task => (
          <button
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
              selectedTasks.includes(task.id)
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className={selectedTasks.includes(task.id) ? 'text-indigo-600' : 'text-gray-500'}>
                {task.icon}
              </span>
              <span className={`font-medium ${
                selectedTasks.includes(task.id) ? 'text-indigo-900' : 'text-gray-700'
              }`}>
                {task.title}
              </span>
            </div>
            {selectedTasks.includes(task.id) && (
              <Check className="w-5 h-5 text-indigo-600" />
            )}
          </button>
        ))}
      </div>

      <button
        disabled={selectedTasks.length === 0}
        className={`w-full mt-6 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium text-white transition-colors ${
          selectedTasks.length > 0
            ? 'bg-indigo-600 hover:bg-indigo-700'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        <PlayCircle className="w-5 h-5" />
        <span>Начать тест ({selectedTasks.length})</span>
      </button>
    </div>
  );
}

export default ExamBuilder;