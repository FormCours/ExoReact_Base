import clsx from 'clsx';
import PropTypes from 'prop-types';
import priorityEnum from '../../enums/priority.enum';
import style from './task-list.module.css';


const TaskListItem = ({ id, name, desc, priority, isDone, onTerminate, onDelete }) => (
    <section className={clsx(style.task, isDone && style.isDone)}>
        <div className={style.taskInfo}>
            <h3>{name} {priority === priorityEnum.HIGH && (
                <span className={style.urgent}>Urgent</span>
            )}</h3>
            <p>{desc}</p>
        </div>
        <div className={style.taskAction}>
            <button onClick={() => onTerminate(id)} disabled={isDone}>Terminer</button>
            <button onClick={() => onDelete(id)}>Suprimer</button>
        </div>
    </section>
);

const TaskList = ({ tasks, onTerminateTask, onDeleteTask }) => (
    <article className={style.listApp}>
        <h2>La liste des taches</h2>
        <div className={style.listContent}>
            {tasks.map(
                task => <TaskListItem {...task} key={task.id}
                            onDelete={onDeleteTask}
                            onTerminate={onTerminateTask} />
            )}
        </div>
    </article>
);


TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
    }))
};

TaskList.defaultProps = {
    tasks: []
};

export default TaskList;