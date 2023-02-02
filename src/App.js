import './App.css';
import { Routes, Route } from 'react-router-dom';
import StarshipList from './StarshipList/StarshipList';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<StarshipList />}
        />
      </Routes>
    </>
  );
}

export default App;
