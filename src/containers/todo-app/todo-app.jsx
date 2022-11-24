import { nanoid } from 'nanoid';
import { useState } from 'react';
import TaskForm from '../../components/task-form/task-form';
import TaskList from '../../components/task-list/task-list';

const TodoApp = () => {

    const [tasks, setTasks] = useState([]);

    const handleNewTask = (data) => {
        const task = {
            ...data,
            id: nanoid(),
            isDone: false
        };

        setTasks(t => [...t, task]);
    };

    const handleTerminateTask = (id) => {
        // setTasks(tasks => {
        //     const data = [];
        //
        //     for (const task in tasks) {
        //         if (task.id === id) {
        //             const updatedTask = { ...task, isDone: true };
        //             data.push(updatedTask);
        //         }
        //         else {
        //             data.push(task);
        //         }
        //     }
        //
        //     return data;
        // });

        setTasks(tasks => tasks.map(task => (task.id !== id) ? task : {...task, isDone: true}));
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    return (
        <>
            <TaskForm onNewTask={handleNewTask} />
            <TaskList tasks={tasks}
                onTerminateTask={handleTerminateTask}
                onDeleteTask={handleDeleteTask} />
        </>
    );
};

export default TodoApp;