"use client"

import React, { useState } from "react";

const initialTasks = [
  { id: 1, time: '12PM', title: 'Locating Programming', checked: true },
  { id: 2, time: '7PM', title: 'Learn how to cook', checked: false },
  { id: 3, time: '2PM', title: 'Learn how to play', checked: false },
  { id: 4, time: '4PM', title: 'Have lunch', checked: false },
  { id: 5, time: '6PM', title: 'Going to travel', checked: false },
  { id: 6, time: '7PM', title: 'Going to Check up', checked: false },
  { id: 7, time: '9PM', title: 'Watch a movie', checked: false },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleCheckboxChange = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="h-28 overflow-y-auto">
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center rounded-lg text-[#000000B2] gap-2">
            <input
              type="checkbox"
              className="appearance-none w-4 h-4 relative cursor-pointer 
                    before:absolute before:inset-0 before:rounded border-2 
                    border-black before:bg-white
                    after:absolute after:inset-0 after:bg-[#50C2C9] after:scale-0 
                    after:transition-transform after:duration-200 after:ease-in-out 
                    checked:after:scale-100"
              checked={task.checked}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <span className="text-xs font-semibold">{task.title}</span>
            <span className="text-xs font-semibold">{task.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}