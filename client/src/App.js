import { useRoutes } from 'react-router-dom'
import MainPage from './MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let routes = useRoutes([
    {
      path: '/',
      element: <MainPage />
    }
  ]);

  return routes;
}

export default App;
