import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Landing/LandingPage';
import NotFound from './components/NotFound/NotFound';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';
import Task3 from './components/Task3/Task3';


function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route index element={<LandingPage />} />
        <Route path="/Task/1" element={<Task1    />} />
        <Route path="/Task/2" element={<Task2  />} />

        <Route
          path="/Task/3"
          element={<Task3  />}
        />
        <Route
          path="*"
          element={ <NotFound  />}  
        />
        

        </Routes>
    </BrowserRouter>
  );
}

export default App;
