import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from 'Routes/Home/Home';
import JobDetail from 'Routes/JobDetail/JobDetail';

function App() {
  console.log(process.env);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="job" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
