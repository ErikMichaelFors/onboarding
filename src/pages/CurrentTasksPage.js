import { useContext } from 'react';
import CurrentTasksContext from '../store/current-tasks-context';
import TaskList from '../components/headlines/TaskList';

function CurrentTasksPage() {
    const currentTasksContext = useContext(CurrentTasksContext);

    let content;

    if (currentTasksContext.totalCurrentTasks === 0){
        content = <p>You got no current tasks. Start with one?</p>
    }
    else {
        console.log(currentTasksContext.currentTasks);
        content = <TaskList tasks={currentTasksContext.currentTasks} />
    }

    return (
        <section>
            <h1>Current Tasks Page</h1>
            {content}
        </section>
    )
  }

  export default CurrentTasksPage;