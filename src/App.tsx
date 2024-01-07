import { Routes, Route } from 'react-router-dom';
import './styles/common.scss';
import Home from './views/Home';
import Project from './views/Project';
import Page404 from './views/Page404';
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/project/:id" element={<Project />} />       
      </Routes>
    </>
  );
}

export default App;
