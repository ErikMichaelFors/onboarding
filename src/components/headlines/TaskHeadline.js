import Card from '../ui/Card';
import classes from './TaskHeadline.module.css';

import CurrentTasksContext from '../../store/current-tasks-context';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskHeadline(props) {
    const currentTasksContext = useContext(CurrentTasksContext);
    const [taskIsCurrent, setTaskIsCurrent] = useState (currentTasksContext.taskIsCurrent(props.task.id));
    const navigate = useNavigate();

    function addTaskToCurrentsContext(){
        if (!taskIsCurrent){
        currentTasksContext.addCurrentTask({
            id: props.task.id,
            title: props.task.title,
            text: props.task.description,
            image: props.task.image
        })
        setTaskIsCurrent(!taskIsCurrent)
        }
    }

    function startTask() {
        addTaskToCurrentsContext();
        currentTasksContext.isTaskExpanded(true);
        navigate('/current-tasks', {replace: true});
    }

    return (
        <Card>
            <li key={props.id}>
                <div className={classes.task_headline_container}>
                    <div className={classes.headline}>
                        <h2>{props.task.title}</h2>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={!taskIsCurrent && startTask}>{!taskIsCurrent ? "Start Task" : "Open Task"}</button>
                    </div>
                </div>
            </li>
        </Card>
    );
}

export default TaskHeadline;