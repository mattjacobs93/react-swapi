import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />}/>
        <Route path='/starships/:starshipNum' element={<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
