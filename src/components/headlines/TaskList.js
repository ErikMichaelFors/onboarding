import TaskHeadline from './TaskHeadline';
import classes from './TaskList.module.css';
import TaskItem from './TaskItem';

import CurrentTasksContext from '../../store/current-tasks-context';
import { useContext } from 'react';

function TaskList(props) {
    const currentTasksContext = useContext(CurrentTasksContext);
    props.tasks.map(task => {
        const isOpen = currentTasksContext.taskIsExpanded(task.id);
        task.open = isOpen ? isOpen : false;
    });
    


    return (
        <ul className={classes.list}>
            {props.tasks.map(task => (
                <div>
                    {!task.open && <TaskHeadline open={task.open} task={task} id={task.id}/>}
                    {task.open && <TaskItem task={task} id={task.id}/>}
                </div>
            ))}
        </ul>
    );
}

export default TaskList;
