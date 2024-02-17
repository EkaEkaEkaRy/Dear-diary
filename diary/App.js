import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Start from './start_page/start';
import Main from './main_page/main';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="*" element={<Start />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
