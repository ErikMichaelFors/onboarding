
import Card from '../ui/Card';

import classes from './TaskItem.module.css';

function TaskItem(props) {

    function doneBtnClickedHandler() {

    }

    function cancelBtnClickedHandler() {

    }

    return (
        <Card>
            <li key={props.task.id}>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src={props.task.image} alt={props.task.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{props.task.title}</h3>
                        <p>{props.task.text}</p>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes.btn_cancel} onClick={cancelBtnClickedHandler}>Close</button>
                        <button onClick={doneBtnClickedHandler}>Done</button>
                    </div>
                </div>
            </li>
        </Card>
    );
}

export default TaskItem;