import './App.css';
import { Routes, Route } from 'react-router-dom';
import StarshipList from './StarshipList/StarshipList';
import StarshipPage from './StarshipPage/StarshipPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<StarshipList />}
        />
        <Route
          path='/starship'
          element={<StarshipPage />}
        />
      </Routes>
    </>
  );
}

export default App;
