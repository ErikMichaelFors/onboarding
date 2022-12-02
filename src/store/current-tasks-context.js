import { createContext, useState } from "react";

const CurrentTasksContext = createContext({
    currentTasks: [],
    totalCurrentTasks: 0,
    addCurrentTask: (currentTask) => {},
    removeCurrentTask: (taskId) => {},
    taskIsCurrent: (taskId) => {},

    expandedTasks: [],
    addExpandedTask: (taskExpanded) => {},
    removeExpandedTask: (taskId) => {},
    taskIsExpanded: (taskId) => {},
});

export function CurrentTasksContextProvider(props) {
    const [userCurrentTasks, setUserCurrentTasks] = useState([]);
    const [isTaskExpanded, setIsTaskExpanded] = useState([]);

    /**Expanded */
    function addExpandedTaskHandler(currentTask) {
        setIsTaskExpanded((prevUserCurrentTasks)=>{
            return prevUserCurrentTasks.concat(currentTask);
        });
    }

    function removeExpandedTaskHandler(taskId) {
        setIsTaskExpanded((prevUserCurrentTasks)=>{
            return prevUserCurrentTasks.filter(task => task.id !== taskId);
        });
    }

    function taskIsExpandedHandler(taskId) {
        return isTaskExpanded.some(task => task.id === taskId);
    }

    /**Current */
    function addCurrentTaskHandler(currentTask) {
        setUserCurrentTasks((prevUserCurrentTasks)=>{
            return prevUserCurrentTasks.concat(currentTask);
        });
    }

    function removeCurrentTaskHandler(taskId) {
        setUserCurrentTasks((prevUserCurrentTasks)=>{
            return prevUserCurrentTasks.filter(task => task.id !== taskId);
        });
    }

    function taskIsCurrentTaskHandler(taskId) {
        return userCurrentTasks.some(task => task.id === taskId);
    }

    const context = {
        currentTasks: userCurrentTasks,
        totalCurrentTasks: userCurrentTasks.length,
        expandedTasks: isTaskExpanded,
        addCurrentTask: addCurrentTaskHandler,
        removeCurrentTask: removeCurrentTaskHandler,
        taskIsCurrent: taskIsCurrentTaskHandler,
        
        addExpandedTask: addExpandedTaskHandler,
        removeExpandedTask: removeExpandedTaskHandler,
        taskIsExpanded: taskIsExpandedHandler,
    };

    return (
        <CurrentTasksContext.Provider value={context}>
            {props.children}
        </CurrentTasksContext.Provider>
    )
}

export default CurrentTasksContext;