import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import priorityEnum from '../../enums/priority.enum';
import style from './task-form.module.css';
import PropTypes from 'prop-types';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const taskSchema = yup.object({
    name: yup.string().trim().required(),
    desc: yup.string().trim(),
    priority: yup.string().oneOf(Object.values(priorityEnum)).required()
});

const TaskForm = ({onNewTask}) => {

    const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm({
        defaultValues: {
            name: '',
            desc: '',
            priority: priorityEnum.LOW
        },
        resolver: yupResolver(taskSchema),
        mode: 'onBlur'
    });

    const handleTaskSubmit = (data) => {
        onNewTask(data);

        setFocus('name');
        reset();
    };

    return (
        <article className={style.formTask}>
            <h2>Le formulaire</h2>
            <form onSubmit={handleSubmit(handleTaskSubmit)}>
                <div className={clsx(style.inputUser, style.inputName, errors.name && style.error)}>
                    <label htmlFor="TaskFormName">Nom</label>
                    <input id="TaskFormName" type="text" {...register('name')} />
                </div>
                <div className={clsx(style.inputUser, style.inputDesc)}>
                    <label htmlFor="TaskFormDesc">Description</label>
                    <textarea id="TaskFormDesc" {...register('desc')} />
                </div>
                <div className={clsx(style.inputUser, style.inputPrio)}>
                    <label htmlFor="TaskFormPrio">Priorité</label>
                    <select id='TaskFormPrio' {...register('priority')}>
                        {Object.values(priorityEnum).map(
                            priority => <option key={priority} value={priority}>{priority}</option>
                        )};
                    </select>
                </div>
                <div className={style.actionSubmit}>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </article>
    );
};

TaskForm.propTypes = {
    onNewTask: PropTypes.func
};

TaskForm.defaultProps = {
    onNewTask: () => { }  // NOOP  (No operation)
};

export default TaskForm;