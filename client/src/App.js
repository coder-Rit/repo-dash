import './App.css';
import MainComp from './components/MainComp/MainComp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  
  return (
    <Router>
    <Routes>
   
      <Route index element={<MainComp />} />
    </Routes>
</Router>
  );
}

export default App;
