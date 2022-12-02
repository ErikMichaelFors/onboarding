import TaskList from "../components/headlines/TaskList";

import CurrentTasksContext from '../store/current-tasks-context';
import { useContext } from 'react';

// TODO: Replace this with a mockup API
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'What we do',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        text:
          'This is what we do on Eways. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
    },
    {
        id: 'm2',
        title: 'Why we work - Our Misson',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        text:
          'Why do we do what we do here at Eways? To change our society, towards a fossil-fuel freedom is absolutely necessary for the future of our children. As an independent and fast growing charging operator, we have a clear role in the change. In order to succeed in our task, we have worked out a number of values. These values gives us clarity in our daily work and with these we can keep a high pace.',
    },
    {
      id: 'm3',
      title: 'Code of Conduct',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      text:
        'The code of conduct of Eways is very important. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 'm4',
      title: 'GDPR',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      text:
        'GDPR stands for General Data Protection Regulation. It is a European regulation implemented in 2018 to enhance EU citizens control over the personal data that companies can legally hold. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    },
  ];

  function TodoTasksPage() {
    
  const currentTasksContext = useContext(CurrentTasksContext);  

  function filterTasks(tasks) {
    return tasks.filter(task => !currentTasksContext.taskIsCurrent(task.id));
  }

    return (
        <section>
            <h1>Todo Tasks Page</h1>
            <TaskList tasks={filterTasks(DUMMY_DATA)}/>
        </section>
    )
  }

  export default TodoTasksPage;