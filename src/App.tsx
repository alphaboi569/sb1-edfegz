import React, { useState } from 'react';
import { BookOpen, BrainCircuit, Calculator, FileSpreadsheet, FunctionSquare, GitGraph, Shapes } from 'lucide-react';
import TaskList from './components/TaskList';
import ExamBuilder from './components/ExamBuilder';
import Header from './components/Header';

export type TaskType = {
  id: string;
  title: string;
  icon: React.ReactNode;
  subtypes: {
    id: string;
    title: string;
    description: string;
    interactive?: boolean;
  }[];
};

const taskTypes: TaskType[] = [
  {
    id: 'text',
    title: 'Текстовые задачи',
    icon: <BookOpen className="w-6 h-6" />,
    subtypes: [
      {
        id: 'movement',
        title: 'Задачи на движение',
        description: 'Решение задач с равномерным движением объектов',
        interactive: true
      },
      {
        id: 'work',
        title: 'Задачи на работу',
        description: 'Вычисление времени и производительности'
      },
      {
        id: 'mixture',
        title: 'Задачи на смеси и сплавы',
        description: 'Расчет концентраций и пропорций'
      }
    ]
  },
  {
    id: 'probability',
    title: 'Теория вероятностей',
    icon: <BrainCircuit className="w-6 h-6" />,
    subtypes: [
      {
        id: 'classical',
        title: 'Классическая вероятность',
        description: 'Вычисление вероятности случайных событий',
        interactive: true
      },
      {
        id: 'conditional',
        title: 'Условная вероятность',
        description: 'Задачи на зависимые события'
      }
    ]
  },
  {
    id: 'calculation',
    title: 'Вычислительные задачи',
    icon: <Calculator className="w-6 h-6" />,
    subtypes: [
      {
        id: 'derivatives',
        title: 'Производные',
        description: 'Вычисление производных функций',
        interactive: true
      },
      {
        id: 'integrals',
        title: 'Интегралы',
        description: 'Решение определенных и неопределенных интегралов'
      }
    ]
  },
  {
    id: 'geometry',
    title: 'Геометрические задачи',
    icon: <Shapes className="w-6 h-6" />,
    subtypes: [
      {
        id: 'planimetry',
        title: 'Планиметрия',
        description: 'Задачи на плоские фигуры',
        interactive: true
      },
      {
        id: 'stereometry',
        title: 'Стереометрия',
        description: 'Задачи на пространственные фигуры',
        interactive: true
      }
    ]
  },
  {
    id: 'equation',
    title: 'Уравнения',
    icon: <FunctionSquare className="w-6 h-6" />,
    subtypes: [
      {
        id: 'quadratic',
        title: 'Квадратные уравнения',
        description: 'Решение квадратных уравнений',
        interactive: true
      },
      {
        id: 'irrational',
        title: 'Иррациональные уравнения',
        description: 'Уравнения с корнями'
      }
    ]
  },
  {
    id: 'inequality',
    title: 'Уравнения с неравенством',
    icon: <GitGraph className="w-6 h-6" />,
    subtypes: [
      {
        id: 'linear',
        title: 'Линейные неравенства',
        description: 'Решение линейных неравенств',
        interactive: true
      },
      {
        id: 'system',
        title: 'Системы неравенств',
        description: 'Решение систем неравенств'
      }
    ]
  },
  {
    id: 'parameter',
    title: 'Задачи с параметром',
    icon: <FileSpreadsheet className="w-6 h-6" />,
    subtypes: [
      {
        id: 'graphical',
        title: 'Графический метод',
        description: 'Решение с помощью графиков',
        interactive: true
      },
      {
        id: 'analytical',
        title: 'Аналитический метод',
        description: 'Решение через анализ условий'
      }
    ]
  }
];

function App() {
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TaskList taskTypes={taskTypes} />
          </div>
          <div className="lg:col-span-1">
            <ExamBuilder 
              taskTypes={taskTypes}
              selectedTasks={selectedTasks}
              setSelectedTasks={setSelectedTasks}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;