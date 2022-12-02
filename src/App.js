import { Routes, Route } from 'react-router-dom';

import TodoTasksPage from './pages/TodoTasksPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import CurrentTasksPage from './pages/CurrentTasksPage';
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TodoTasksPage />}/>
        <Route path="/current-tasks" element={<CurrentTasksPage />}/>
        <Route path="/completed-tasks" element={<CompletedTasksPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;
