import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Start from './start_page/start';
import Main from './main_page/main';
import Mood from './main_page/main_comp/mood'
import Profile from './profile_page/profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={Start} />
        <Route path="/Main" Component={Main} />
          <Route path="/Profile" Component={Profile} />


        <Route path="/Main/Mood">
        </Route>
      </Routes>

    </BrowserRouter>
  );
}



export default App;
