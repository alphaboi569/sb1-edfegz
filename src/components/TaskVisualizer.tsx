import React, { useEffect, useRef } from 'react';

interface TaskVisualizerProps {
  taskId: string;
}

function TaskVisualizer({ taskId }: TaskVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Example visualization based on task type
    switch (taskId) {
      case 'movement':
        drawMovementVisualization(ctx, canvas.width, canvas.height);
        break;
      case 'planimetry':
        drawGeometryVisualization(ctx, canvas.width, canvas.height);
        break;
      // Add more cases for other interactive tasks
    }
  }, [taskId]);

  const drawMovementVisualization = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Example: Draw a moving point
    let x = 0;
    const y = height / 2;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw path
      ctx.beginPath();
      ctx.strokeStyle = '#e5e7eb';
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
      
      // Draw moving point
      ctx.beginPath();
      ctx.fillStyle = '#4f46e5';
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      
      x = (x + 2) % width;
      requestAnimationFrame(animate);
    };
    
    animate();
  };

  const drawGeometryVisualization = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Example: Draw an interactive triangle
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.moveTo(width / 2, height / 4);
    ctx.lineTo(width / 4, (height * 3) / 4);
    ctx.lineTo((width * 3) / 4, (height * 3) / 4);
    ctx.closePath();
    ctx.stroke();
  };

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <canvas
        ref={canvasRef}
        className="w-full h-64 rounded border border-gray-200 bg-white"
      />
      <p className="mt-4 text-sm text-gray-600">
        Взаимодействуйте с визуализацией для лучшего понимания задачи
      </p>
    </div>
  );
}

export default TaskVisualizer;