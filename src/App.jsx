import { useRoutes } from "react-router-dom";
import UserEdite from "./pages/userEdite";
import UserList from "./pages/userList";

const App = () => {

  const element = useRoutes([
    {path: '/', element: <UserList />},
    {path: '/create', element: <UserEdite />},
    {path: '/edit/:id', element: <UserEdite />},
  ]);

  return element;
};

export default App;
